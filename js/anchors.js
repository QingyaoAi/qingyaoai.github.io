// anchors plugin
// creates clickable icon next to each heading that links to that section

// create section links next to each heading 1 through 4 that have unique ids
const createAnchors = () => {
  // for each heading
  const headings = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id]");
  for (const heading of headings) {
    // create anchor link
    const link = document.createElement("a");
    link.classList.add("fas", "fa-link", "anchor");
    link.href = "#" + heading.id;
    link.setAttribute("aria-label", "Link to this section");
    heading.append(link);

  }
};

// glow section when user navigates to it
const onHashChange = () => {
  const id = window.location.hash.replace("#", "");
  let element = document.getElementById(id);
  if (!element) return;
  const group = element.closest("details");
  if (group) group.open = true;
  element.dataset.glow = true;
  window.setTimeout(() => (element.dataset.glow = false), 2000);
};

// start script and add triggers
window.addEventListener("load", createAnchors);
window.addEventListener("load", onHashChange);
window.addEventListener("hashchange", onHashChange);

document.addEventListener("click", (event) => {
  const link = event.target.closest(".year-nav a");
  if (!link) return;
  const group = document.getElementById(link.hash.slice(1));
  if (group) group.open = true;
});
