import { mainComponent } from "../components/admin/index.js";
import { useState } from "../../hook/index.js";
const sideBar = document.getElementsByClassName("section-sidebar")[0];
const mainContainer = document.getElementsByClassName("main-container")[0];
const sectionMain = document.getElementsByClassName("section-main");
//-------------------------Get element in html.join --------------------
const sidebarName = document.getElementsByClassName("sidebar-name");
const nameMenu = document.getElementsByClassName("name-menu");
//----------------------------------------------------------------
const listOptions = [
  {
    id: 1,
    menuName: "Trang chủ",
    select: true,
  },
  {
    id: 2,
    menuName: "Quản lí user",
    select: false,
  },
  {
    id: 3,
    menuName: "Quản lí khóa học",
    select: false,
  },
];

const sideBarList = listOptions.map((temp) => {
  ``;
  return `<div class="sidebar-name"  id=${temp.id}  option=${temp.select} >
  <div class="name-menu">${temp.menuName}</div>
  </div>`;
});

sideBar.innerHTML = sideBarList.join("");

const defaultValueList = useState(1);
if (sidebarName[0].getAttribute("option") == "true") {
  sidebarName[0].style.backgroundColor = "white";
  sidebarName[0].style.color = "var(--dark-blue-background)";
  defaultValueList.setState(1);
  console.log(defaultValueList.getState());
  // mainComponent(defaultValueList.getState());
}
for (var i = 0; i < sidebarName.length; i++) {
  sidebarName[i].addEventListener("click", function () {
    for (let j = 0; j < sidebarName.length; j++) {
      sidebarName[j].setAttribute("option", "false");
      sidebarName[j].style.backgroundColor = "";
      sidebarName[j].style.color = "";
    }

    this.setAttribute("option", "true");
    this.style.backgroundColor = "white";
    this.style.color = "var(--dark-blue-background)";
    //----------------------------------------------------------------
    const tempId = this.getAttribute("id");
    defaultValueList.setState(tempId);
    defaultValueList.setState(parseInt(this.getAttribute("id")));
    console.log(defaultValueList.getState()); // bug state couldn't handle undefined
    mainComponent(defaultValueList.getState());
    //------------------------------------------------------------------------
  });
}

// mainComponent(localStorage.getItem("tempID"));

const sectionMainHTML = `<div class="main-path"  >
<div class="name-title">Admin Dashboard</div>
  </div>
  <div class="main-components">
   
  </div>`;
mainContainer.innerHTML = sectionMainHTML;
