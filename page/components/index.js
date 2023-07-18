import AdminPage from "./admin/index.js";
import UserPage from "./user/index.js";
export const mainComponent = (props) => {
  const mainContainer = document.getElementsByClassName("main-components")[0];
  //--------------------------------------------------

  const menuComponent =
    localStorage.getItem("accessToken") == "user"
      ? UserPage().menuComponent
      : AdminPage().menuComponent;

  const listOptions =
    localStorage.getItem("accessToken") == "user"
      ? UserPage().listOptions
      : AdminPage().listOptions;

  const selectComponents = menuComponent.find((item) => item.id == props);

  if (selectComponents) {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    //----------style object ----------------
    container.style.margin = "20px 20px 20px 20px";
    //----------------------------------------------------------------
    container.appendChild(selectComponents.component);
    mainContainer.innerHTML = "";
    mainContainer.appendChild(container);
  }

  return { listOptions, selectComponents };
};
