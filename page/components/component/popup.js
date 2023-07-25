export const ToastMessage = (label) => {
  const element = document.createElement("div");
  const Toast = document.getElementById("toast");
  element.setAttribute("class", "toast");
  element.style.background = label.backgroundColor;
  element.innerHTML = `
          ${label.logo}
           <span id="message">${label.content}</span>
   `;
  Toast.appendChild(element);
  setTimeout(() => {
    Toast.removeChild(element);
  }, 3000);
};

export const showToastSuccess = (message) => {
  const label = {
    content: message,
    backgroundColor: "green",
    logo: `<i class="fa-regular fa-circle-check fa-2xl" style="color: #ffffff;margin-right: 20px;"></i>`,
  };
  ToastMessage(label);
};

export const showToastDanger = (message) => {
  const label = {
    content: message,
    backgroundColor: "red",
    logo: `<i class="fa-regular fa-circle-xmark fa-2xl" style="color: #ffffff; margin-right: 20px;"></i>`,
  };
  ToastMessage(label);
};
