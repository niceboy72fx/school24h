import { TableCourse } from "./table.js";
import { CheckForm, FormButtons } from "./form.js";
export const Window = (props, methodFetch, func) => {
  const element = document.createElement("div");
  element.setAttribute("class", "window");
  const listButtonForm = [{ name: "Thêm câu hỏi", function: "" }];
  const listTableCourse = [
    "STT",
    "Tên câu hỏi",
    "Số câu trả lời",
    "Tác giả",
    "Xét duyệt",
    "Trạng thái",
    "Thao tác",
  ];
  const table = TableCourse(listTableCourse, props);
  const form = CheckForm();
  window.eventListen = (eventID) => {
    const showInforQuestion = Question(props, eventID);
    document.body.appendChild(showInforQuestion.element);
  };
  window.removePopupCourse = () => {
    const closePopup = document.querySelector(".window");
    document.body.removeChild(closePopup);
  };
  window.deleteCourseWin = (eventID) => {
    console.log(eventID);
    const closePopup = document.querySelector(".windel");
    document.body.removeChild(closePopup);
  };
  window.deletePopupCourseWin = (eventID) => {
    const deletePopup = DeletePopup(
      "Bạn có chắc xóa câu hỏi này không ?",
      eventID
    );
    document.body.appendChild(deletePopup.element);
  };
  element.innerHTML = `
     <div id="popup-win">
       <div class="window-close">
         <i class="fa-solid fa-xmark" onclick="removePopupCourse()"></i>
       </div>
      <div class="window-content">
        <div class="content-form">
           ${form.outerHTML}
        </div>
       <div class="content-table">
          ${table.element.outerHTML}
       </div>
     </div>
     </div>
   `;
  return { element };
};

export const Question = (props, id) => {
  const element = document.createElement("div");
  element.setAttribute("class", "windowQues");
  window.removePopup = () => {
    const closePopup = document.querySelector(".windowQues");
    document.body.removeChild(closePopup);
  };

  const item = props.find((item) => item.id === parseInt(id));
  const { options } = item;
  element.innerHTML = `
     <div id="popup-question" style="width:45%">
        <div class="window-close">
         <i class="fa-solid fa-xmark" onclick="removePopup()"></i>
       </div>
       <div class="window-content">
         <input type="input" value="${
           item.question
         }" style="width:90%; font-size:23px; padding: 14px 14px 14px 14px;   font-weight: 600; " placeholder="Nội dung khóa học"/>
         <div class="input-question">
            ${options.map(
              (value) =>
                `
                <div>
                  <input type="checkbox"></input>
                  <input
                   type="input"
                   value="${value.option}"
                   style="width:90%; font-size:14px; padding: 14px 14px 14px 14px; margin:12px 5px 12px 0px;  
"
                  /> 
                  <i class="fa-solid fa-xmark" "></i>
                </div>
              `
            )}
         </div>
          <div class="form-button">
                    <button class="button-lagre" style="color:white; background-color:green">Sửa</button>
          </div>
       </div>
     </div>
   `;

  return { element };
};

export const addNewCourse = (func) => {
  const element = document.createElement("div");
  element.setAttribute("class", "window");
  window.removePopup = () => {
    const closePopup = document.querySelector(".window");
    document.body.removeChild(closePopup);
  };
  element.innerHTML = `
  <div id="popup-question" style="width:45%">
        <div class="window-close">
         <i class="fa-solid fa-xmark" onclick="removePopup()"></i>
       </div>
       <div class="window-content">
          <form>
             <h3>Thêm khóa học</h3>
             <input type="input" style="width:90%" placeholder="Nội dung khóa học"/>
          </form>
          <div class="form-button">
              <button class="button-lagre" style="color:white; background-color:green">Thêm khóa học</button>
          </div>
     </div>
    </div>
   `;
  return { element };
};

export const DeletePopup = (label, id) => {
  const element = document.createElement("div");
  element.setAttribute("class", "windel");
  window.removePopup = () => {
    const closePopup = document.querySelector(".windel");
    document.body.removeChild(closePopup);
  };
  const deleteID = "deleteCourse(" + id + ")";
  const listButtonForm = [
    {
      name: "Hủy",
      function: "removePopup()",
      styled: "background-color:gray; color:white;",
    },
    {
      name: "Xóa",
      function: deleteID,
      styled: "background-color:red; color:white;",
    },
  ];
  const formButton = FormButtons(listButtonForm);
  element.innerHTML = `
  <div id="popup-question" style="width:45%">
        <div class="window-close">
         <i class="fa-solid fa-xmark" onclick="removePopup()"></i>
       </div>
       <form>
             <h3>${label}</h3>
        </form>
       <div class="window-content">
         ${formButton.element.outerHTML}
       </div>
    </div>
   `;

  return { element };
};
