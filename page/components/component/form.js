import { useState } from "../../../hook/index.js";

export const FormButtons = (listButton) => {
  const element = document.createElement("div");
  element.setAttribute("class", "form-button");
  element.innerHTML = `${listButton.map(
    (value) =>
      `<button class="button-lagre" onclick=${value.function} style="${value.styled}">${value.name}</button>`
  )}`;
  return { element };
};

export const CheckForm = () => {
  const element = document.createElement("div");
  const question = element.querySelector("#question");
  element.setAttribute("class", "form");
  const temp = [];
  const optionsSelect = [];
  for (let i = 1; i <= 10; i++) {
    optionsSelect.push(`<option value=${i}>${i}</option>`);
  }
  const { setState, getState } = useState(``);
  element.innerHTML = `
     <form>
       <input type="input" placeholder="Nội dung câu hỏi"/>
       <label for="question">Số lượng câu trả lời</label>
       <select onchange="receive(event.target.value)" name="question" class="form-question">
          ${optionsSelect}
        </select>
     </form>
     <div id="question">
       ${temp.outerHTML}
     </div>
   `;

  window.receive = (count) => {
    for (let i = 0; i < count; i++) {
      temp.push(`
        <div>
              <input id="answer-options" name="option" type="radio"></input>
              <input
                   type="input"
                   id="question-option"
                   style="width:90%; font-size:14px; padding: 14px 14px 14px 14px; margin:12px 5px 12px 0px;"/> 
                  <i  class="fa-solid fa-xmark" "></i>
          </div>
      `);
    }
    console.log(temp);
  };
  return element;
};
