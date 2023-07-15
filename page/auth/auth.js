import {
  getQueryAccount,
  registerQueryAccount,
} from "../../graphQL/authQuery.js";

const usernameLogin = document.getElementsByClassName("input-login")[0];
const passwordLogin = document.getElementsByClassName("input-login")[1];
const usernameRegister = document.getElementsByClassName("input-register")[0];
const passRegister = document.getElementsByClassName("input-register")[1];
const rePassRegister = document.getElementsByClassName("input-register")[2];
const submitFormLogin = document.getElementById("button-login");
const submitFormRegister = document.getElementById("button-register");

if (submitFormLogin == null) {
  submitFormRegister.addEventListener("click", () => {
    registerQueryAccount({
      userName: usernameRegister.value,
      userPassword: passRegister.value,
    });
  });
}
if (submitFormRegister == null) {
  submitFormLogin.addEventListener("click", () => {
    getQueryAccount({
      userName: usernameLogin.value,
      userPassword: passwordLogin.value,
    });
  });
}
