// Load the social feed only when the visitor expands it.
document.querySelectorAll(".home-updates").forEach((details) => {
  details.addEventListener("toggle", () => {
    if (!details.open || details.dataset.loaded) return;
    details.dataset.loaded = "true";
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/linkedin-profile-posts/widget.js";
    script.async = true;
    details.append(script);
  });
});
