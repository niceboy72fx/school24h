import { Table } from "../component/table.js";
import { fetchAllCourse } from "../../../middleWare/index.js";
export const Course = () => {
  const data = fetchAllCourse();
  const list = ["STT", "Tên khóa học", "Tác giả", "Trạng thái", "Thao tác"];
  const table = Table(list, data);
  const element = document.createElement("div");
  element.setAttribute("class", "course");
  element.style.margin = "12px 12px 12px 12px";
  element.appendChild(table.element);

  element.innerHTML = `
  <div class="name-title">
     Khóa học
  </div>
  <div class="course-content">
      ${table.element.outerHTML}
  </div>
   `;
  return element;
};
