const appCaroucel = document.querySelector(".app-caroucel");
const buttonRightCaroucel = document.querySelectorAll(".app-button")[1];
const buttonLeftCaroucel = document.querySelectorAll(".app-button")[0];
const totalItems = appCaroucel.children.length;
//----------------------Caroucel----------------------------------------------------

const changeWidth = 192;

const prev = () => {
  appCaroucel.scroll({
    left: appCaroucel.scrollLeft - changeWidth,
    behavior: "smooth",
  });
  if (appCaroucel.scrollLeft <= 0) {
    appCaroucel.scrollLeft = totalItems * changeWidth;
  }
};

setInterval(prev, 2300);

buttonLeftCaroucel.addEventListener("click", prev);

buttonRightCaroucel.addEventListener("click", () => {
  appCaroucel.scroll({
    left: appCaroucel.scrollLeft + changeWidth,
    behavior: "smooth",
  });
  if (appCaroucel.scrollLeft >= totalItems * changeWidth) {
    appCaroucel.scrollLeft = totalItems * changeWidth;
  }
});
