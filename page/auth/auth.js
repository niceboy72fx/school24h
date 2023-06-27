import {
  getQueryAccount,
  registerQueryAccount,
  test,
} from "../../graphQL/authQuery";

const usernameLogin = document.getElementsByClassName("input-login")[0];
const passwordLogin = document.getElementsByClassName("input-login")[1];
const usernameRegister = document.getElementsByClassName("input-register")[0];
const passRegister = document.getElementsByClassName("input-register")[1];
const rePassRegister = document.getElementsByClassName("input-register")[2];

console.log(test());
