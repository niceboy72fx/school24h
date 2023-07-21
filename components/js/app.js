const preLoad = document.querySelector(".preload");
const page = document.querySelector(".page");
//pre-loading page load
window.addEventListener("unload", () => {
  page.setAttribute("class", "page unloader");
});
window.addEventListener("load", () => {
  setTimeout(() => {
    preLoad.setAttribute("class", "preload unloader fade-out");
    page.setAttribute("class", "page");
  }, 2000);
});

const login = () => {
  window.location.replace("/page/auth/login.html");
};

const signup = () => {
  window.location.replace("/page/auth/signup.html");
};
