import { Table } from "../component/table.js";
import { fetchAllCourse } from "../../../middleWare/index.js";
import { FormButtons } from "../component/form.js";
export const Course = () => {
  const data = fetchAllCourse();
  const list = ["STT", "Tên khóa học", "Trạng thái", "Thao tác"];
  const table = Table(list, data);
  const addNewCourse = () => {
    console.log("successfully added");
  };
  const listButton = [
    {
      name: "Thêm khóa học",
      function: addNewCourse(),
      style: {
        color: "white",
        backgroundColor: "green",
      },
    },
  ];
  const formButton = FormButtons(listButton);
  const element = document.createElement("div");
  element.setAttribute("class", "course");
  element.style.margin = "12px 12px 12px 12px";
  element.appendChild(table.element);
  element.innerHTML = `
  <div class="name-title">
     Khóa học
  </div>
  <div class="course-content" style="height:713px">
      ${formButton.element.outerHTML}
      ${table.element.outerHTML}
  </div>
   `;
  return element;
};
