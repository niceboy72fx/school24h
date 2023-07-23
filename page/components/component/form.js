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
  element.setAttribute("class", "form");
  const optionsSelect = [];
  for (let i = 1; i <= 10; i++) {
    optionsSelect.push(`<option value="${i}">${i}</option>`);
  }

  element.innerHTML = `
     <form>
       <input type="input" placeholder="Nội dung câu hỏi"/>
       <label for="question">Số lượng câu trả lời</label>
       <select onchange="receive(event.target.value)" name="question" class="form-question">
          ${optionsSelect}
        </select> 
     </form>
     <div id="question">
       
     </div>
   `;

  const genQues = document.createElement("select");
  window.receive = (count) => {
    const question = element.querySelector("#question");
    console.log(question.outerText);
    console.log(question);
    genQues.innerHTML = `ekekek`;
    question.appendChild(genQues);
  };
  return element;
};
