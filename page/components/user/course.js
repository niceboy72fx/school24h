import { Table } from "../component/table.js";
import {
  fetchAllCourse,
  fetchAllQuestion,
  postQuestion,
} from "../../../middleWare/index.js";
import { FormButtons } from "../component/form.js";
import { Window, addNewCourse, DeletePopup } from "../component/window.js";
export const Course = () => {
  const data = fetchAllCourse();
  const list = ["STT", "Tên khóa học", "Trạng thái", "Thao tác"];
  const table = Table(list, data);
  window.addNewCourse = () => {
    const add = addNewCourse();
    document.body.appendChild(add.element);
  };
  const listButton = [
    {
      name: "Thêm khóa học",
      function: "addNewCourse()",
      styled: "background-color:green; color:white;",
    },
  ];

  const formButton = FormButtons(listButton);
  const element = document.createElement("div");
  element.setAttribute("class", "course");
  element.style.margin = "12px 12px 12px 12px";
  element.appendChild(table.element);
  window.eventListenCourse = (eventID) => {
    const windowForm = Window(
      fetchAllQuestion(parseInt(eventID)),
      postQuestion
    );
    document.body.appendChild(windowForm.element);
  };
  window.deleteCourse = (eventID) => {
    console.log(eventID);
    const closePopup = document.querySelector(".windel");
    document.body.removeChild(closePopup);
  };
  window.deletePopupCourse = (eventID) => {
    const deletePopup = DeletePopup("Bạn có chắc xóa mục này không ?", eventID);
    document.body.appendChild(deletePopup.element);
  };
  element.innerHTML = `
  <div class="name-title">
     Khóa học
  </div>
  <div class="course-content" >
      ${table.element.outerHTML}
  </div>
   `;
  element.setAttribute("id", "container");
  return element;
};
