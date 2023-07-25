import {
  authGenerator,
  fetchAllAccount,
  postAccount,
} from "../middleWare/index.js";
import {
  showToastDanger,
  showToastSuccess,
} from "../page/components/component/popup.js";

export const getQueryAccount = (req) => {
  const checkValue = fetchAllAccount().some((data) => {
    return (
      req.userName == data.user_name && req.userPassword == data.user_password
    );
  });
  var roleUser = {};
  fetchAllAccount().forEach((data) => {
    if (req.userName == data.user_name) {
      roleUser = {
        role: data.role,
        flag: true,
      };
    }
  });
  if (checkValue) {
    authGenerator(roleUser);
    showToastSuccess("Login success !");
    localStorage.setItem("userName", req.userName);
  } else {
    showToastDanger("Username or Password incorrect !");
  }
};

export const registerQueryAccount = (req) => {
  const checkValue = fetchAllAccount().some((data) => {
    return req.userName == data.user_name;
  });
  const registerAccount = (req) => {
    const data = {
      user_id: fetchAllAccount().length + 1,
      user_name: req.userName,
      user_password: req.userPassword,
      role: "user",
    };
    postAccount(data);
  };
  if (req.userName == "" && req.userPassword == "") {
    showToastDanger("Please fill  !");
  } else {
    registerAccount(req);
    showToastSuccess(
      "Register success ! Please wait 3 seconds back to login !"
    );
    setTimeout(() => {
      window.location.replace("/page/auth/login.html");
    }, 3000);
  }
};
