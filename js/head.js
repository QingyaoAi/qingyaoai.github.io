// Mark the current destination in both navigation layouts.
const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
document.querySelectorAll(".nav_row a, .sidebar a").forEach((link) => {
  const path = new URL(link.href).pathname.replace(/\/$/, "") || "/";
  if (path === currentPath) link.setAttribute("aria-current", "page");
});
