import { TableUserAdmin } from "../component/table.js";
import {
  fetchAllCourse,
  fetchAllQuestion,
  postQuestion,
  fetchAllAccount,
} from "../../../middleWare/index.js";
import { FormButtons } from "../component/form.js";
import { Window, addNewCourse, DeletePopup } from "../component/window.js";
export const User = () => {
  const data = fetchAllAccount();
  const list = ["STT", "Tên User", "Role", "Thao tác"];
  const table = TableUserAdmin(list, data);
  window.addNewCourse = () => {
    const add = addNewCourse();
    document.body.appendChild(add.element);
  };
  const listButton = [
    {
      name: "Thêm User",
      function: "addNewCourse()",
      styled: "background-color:green; color:white;",
    },
  ];

  const formButton = FormButtons(listButton);
  const element = document.createElement("div");
  element.setAttribute("class", "course");
  element.style.margin = "12px 12px 12px 12px";
  window.deletePopupCourse = (eventID) => {
    const deletePopup = DeletePopup(
      "Bạn có chắc xóa User này không ?",
      eventID
    );
    document.body.appendChild(deletePopup.element);
  };
  element.innerHTML = `
  <div class="name-title">
     Quản lí user
  </div>
  <div class="course-content" >
      ${formButton.element.outerHTML}
      ${table.element.outerHTML}
  </div>
   `;
  return element;
};
