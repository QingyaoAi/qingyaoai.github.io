import json
import re
from itertools import groupby
from urllib.parse import urlencode
from urllib.request import Request, urlopen

from util import load_data, log, save_data


DBLP_ENDPOINT = "https://sparql.dblp.org/sparql"
DBLP_RESULT_TYPE = "application/sparql-results+json"


def fetch_publications(author):
    query = f"""
PREFIX dblp: <https://dblp.org/rdf/schema#>
SELECT ?publication ?title ?year ?venue ?link ?author ?position WHERE {{
  VALUES (?type ?priority) {{
    (dblp:Article 0) (dblp:Inproceedings 1) (dblp:Informal 2)
  }}
  ?publication a ?type ;
    dblp:authoredBy <{author}> ;
    dblp:title ?title ;
    dblp:yearOfPublication ?year ;
    dblp:publishedIn ?venue ;
    dblp:hasSignature ?signature .
  ?signature a dblp:AuthorSignature ;
    dblp:signatureDblpName ?author ;
    dblp:signatureOrdinal ?position .
  OPTIONAL {{ ?publication dblp:primaryDocumentPage ?link . }}
}}
ORDER BY DESC(?year) ?priority ?publication ?position
"""
    params = urlencode({"query": query})
    request = Request(f"{DBLP_ENDPOINT}?{params}", headers={"Accept": DBLP_RESULT_TYPE})
    with urlopen(request, timeout=60) as response:
        if response.status != 200 or response.headers.get_content_type() != DBLP_RESULT_TYPE:
            raise ValueError(f"DBLP returned an unexpected response (HTTP {response.status})")
        bindings = json.load(response)["results"]["bindings"]

    if not bindings:
        raise ValueError(f"DBLP returned no publications for {author}")

    rows = ({key: field["value"] for key, field in binding.items()} for binding in bindings)
    for _, publication_rows in groupby(rows, key=lambda row: row["publication"]):
        first, *remaining = publication_rows
        title = first["title"].strip().removesuffix(".")
        if title.startswith("Session details"):
            continue

        authors = [re.sub(r" \d{4}$", "", row["author"]) for row in [first, *remaining]]
        citation = {
            "title": title,
            "authors": authors,
            "publisher": first["venue"],
            # Store a full ISO date so Liquid can group records by publication year.
            "date": f"{first['year']}-01-01",
        }
        if first.get("link"):
            citation["link"] = first["link"]
        yield citation


def title_key(title):
    # Older RIS records omitted periods and used HTML for superscripts.
    return re.sub(r"</?(?:sup|sub)>", "", title).replace(".", "").strip().casefold()


def merge_publications(existing, fetched):
    by_title = {title_key(item["title"]): item for item in existing}
    new = []
    for publication in fetched:
        key = title_key(publication["title"])
        previous = by_title.get(key)
        if previous is None:
            by_title[key] = publication
            new.append(publication)
        elif previous.get("publisher") == "CoRR" and publication["publisher"] != "CoRR":
            previous.update({field: value for field, value in publication.items() if field != "title"})

    # Preserve existing entries and their relative order, even if DBLP removes a record.
    return new + existing


def main():
    config = load_data("../_config.yaml", type_check=False)["auto-cite"]
    output = config["output"]
    existing = load_data(output)
    log("Fetching publications from DBLP")
    citations = merge_publications(existing, fetch_publications(config["dblp-author"]))
    save_data(output, citations)
    log(f"Exported {len(citations)} citations", 2, "green")


if __name__ == "__main__":
    main()
