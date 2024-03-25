const url = "https://www.leontm.me";
document.getElementById("navbar-home").addEventListener("click", (ev) => {
  window.location.href = `${url}`;
});
document.getElementById("navbar-about").addEventListener("click", (ev) => {
  window.location.href = `${url}/about`;
});

document.getElementById("navbar-apps").addEventListener("click", (ev) => {
  window.location.href = `${url}/app-store`;
});
document.getElementById("navbar-projects").addEventListener("click", (ev) => {
  window.location.href = `${url}/projects`;
});
