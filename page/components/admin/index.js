import { DashBoard, HandleDashBoard } from "./dashboard.js";

export const mainComponent = (props) => {
  const mainContainer = document.getElementsByClassName("main-components")[0];
  console.log(mainContainer);

  //----------------------------------------------------------------
  const menuComponent = [
    { id: 1, htmlComponent: DashBoard, jsComponent: HandleDashBoard },
    { id: 2, htmlComponent: DashBoard, jsComponent: HandleDashBoard },
    { id: 3, htmlComponent: DashBoard, jsComponent: HandleDashBoard },
  ];

  const selectComponents = menuComponent.find((item) => item.id == props);

  if (selectComponents) {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    //----------style object ----------------
    container.style.margin = "20px 20px 20px 20px";
    //----------------------------------------------------------------
    container.innerHTML = selectComponents.htmlComponent;
    mainContainer.innerHTML = "";
    mainContainer.appendChild(container);
    selectComponents.jsComponent();
  }
};
