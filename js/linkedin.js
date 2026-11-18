// Load the social feed the first time the panel opens.
document.querySelectorAll(".home-updates").forEach((details) => {
  details.addEventListener("toggle", () => {
    if (!details.open || details.dataset.loaded) return;
    details.dataset.loaded = "true";
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/linkedin-profile-posts/widget.js";
    script.async = true;
    details.append(script);
  });

  // Match the single-column breakpoint in css/home.scss.
  if (!window.matchMedia("(max-width: 991px)").matches) {
    details.open = true;
  }
});
