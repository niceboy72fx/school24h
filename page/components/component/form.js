export const FormButtons = (listButton) => {
  const element = document.createElement("div");
  element.setAttribute("class", "form-button");
  element.innerHTML = `${listButton.map(
    (value) =>
      `<button class="button-lagre" onclick=${value.function} style="">${value.name}</button>`
  )}`;
  return { element };
};

export const Form = (listButton, listCheckbox, listInput) => {
  return {};
};
