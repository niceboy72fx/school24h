import { useState } from "../../../hook/index.js";
import { showToastDanger, showToastSuccess } from "./popup.js";
import { postQuestion } from "../../../middleWare/index.js";
export const FormButtons = (listButton) => {
  const element = document.createElement("div");
  element.setAttribute("class", "form-button");
  element.innerHTML = `${listButton.map(
    (value) =>
      `<button class="button-lagre" onclick=${value.function} style="${value.styled}">${value.name}</button>`
  )}`;
  return { element };
};

export const CheckForm = (idCourses) => {
  console.log(idCourses);
  const element = document.createElement("div");
  const getOptioSelectRadioButton = element.querySelectorAll(".answer-options");
  const getUserName = localStorage.getItem("userName");
  element.setAttribute("class", "form");
  element.setAttribute("id", "re-container");
  const optionsSelect = [1, 2, 3, 4];
  for (let radioButton of getOptioSelectRadioButton) {
    radioButton.addEventListener("click", () => {
      console.log("test");
      for (const otherButton of getOptioSelectRadioButton) {
        if (otherButton !== radioButton) {
          otherButton.setAttribute("checked", false);
        }
      }
      radioButton.setAttribute("checked", true);
    });
  }
  window.postCourse = () => {
    const getOptioSelectRadio = element.querySelectorAll(".answer-options");
    const getQuestion = element.querySelector(".answer-content");
    const getAnswer = element.querySelectorAll("#answer-content");
    let selectedValue = null;

    for (const radioButton of getOptioSelectRadio) {
      if (radioButton.checked) {
        selectedValue = radioButton.value;
        break;
      }
    }
    if (selectedValue !== null && getQuestion.value !== "") {
      const option = [];
      optionsSelect.forEach((item) =>
        option.push({ id: item, option: getAnswer[item - 1].value })
      );
      const data = {
        question: getQuestion.value,
        options: option,
        correctOptionId: selectedValue,
        is_ok: false,
        author: getUserName,
        pendings: false,
      };
      postQuestion(data, idCourses);
    } else {
      showToastDanger("Please fill !");
    }
  };
  element.innerHTML = `
     <form style="display:flex; align-items:center; justify-content:center;">
       <input type="input" placeholder="Nội dung câu hỏi"/>
       <div style="display:flex; align-items:center; justify-content:center; border-radius: 5px ; border: 2px solid var(--dark-blue-background);">
            <label style="margin:10px 10px 10px 10px" for="question">Số lượng câu trả lời</label>
            <input id="input-num" type="number" value="1" style="margin:10px 10px 10px 10px; width: 50px; height:30px"/>
            <button onclick="receiveCountQuestion()" type="button" class="button-lagre" style="border-radius: 5px; color:white; background-color: var(--dark-blue-background)">Số câu hỏi</button>
       </div>
      </form>
      <div id="question" style=" border-radius: 5px ; border: 2px solid var(--dark-blue-background);">
          ${optionsSelect.map(
            (i) => `
             <div id=${i}>
               <input class="answer-options" name="option" type="radio" value=${i} checked="false"  ></input>
               <input
                 type="input"
                 id="answer-content"
                 placeholder="Nội dung câu trả lời"
                 style="width:90%; font-size:14px; padding: 14px 14px 14px 14px; margin:12px 5px 12px 0px;"/> 
            </div>
          `
          )}
          <button onclick="postCourse()" type="button" class="button-lagre" style="border-radius: 5px; color:white; background-color: var(--dark-blue-background)">Add</button>
      </div>
   `;

  return { element };
};
