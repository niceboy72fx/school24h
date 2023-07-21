import { TableUserAdmin } from "../component/table.js";
import {
  fetchAllAccount,
  postAccount,
  putAccount,
  deleteAccount,
} from "../../../middleWare/index.js";
import { FormButtons } from "../component/form.js";
import { addNewUser, DeletePopup } from "../component/window.js";
import { showToastSuccess } from "../component/popup.js";
import { refreshComponent } from "../../../hook/index.js";

export const User = () => {
  const data = fetchAllAccount();
  const list = ["STT", "Tên User", "Role", "Thao tác"];
  const table = TableUserAdmin(list, data);
  const add = addNewUser(postAccount);
  window.addNewUser = () => {
    document.body.appendChild(add.element);
  };

  const listButton = [
    {
      name: "Thêm User",
      function: "addNewUser()",
      styled: "background-color:green; color:white;",
    },
  ];
  window.deletePopupUser = (eventID) => {
    const deletePopup = DeletePopup(
      "Bạn có chắc xóa User không ?",
      eventID,
      "deleteUser"
    );
    document.body.appendChild(deletePopup.element);
  };
  window.deleteUser = (eventID) => {
    const closePopup = document.querySelector(".windel");
    document.body.removeChild(closePopup);
    deleteAccount(eventID);
    showToastSuccess("Xóa User thành công");
  };
  const formButton = FormButtons(listButton);
  const element = document.createElement("div");
  element.setAttribute("class", "course");
  element.style.margin = "12px 12px 12px 12px";
  element.innerHTML = `
  <div class="name-title">
     Quản lí user
  </div>
  <div class="course-content" >
      ${formButton.element.outerHTML}
      ${table.element.outerHTML}
  </div>
   `;
  element.setAttribute("id", "re-container");
  return element;
};
