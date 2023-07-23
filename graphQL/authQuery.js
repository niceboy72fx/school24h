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
  const flagLogin = false;
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
    showToastSuccess("Đăng nhập thành công !");
    localStorage.setItem("userName", req.userName);
  } else {
    showToastDanger("Tên đăng nhập và mật khẩu không đúng !");
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
    showToastDanger("Vui lòng điền hết thông tin !");
  } else {
    registerAccount(req);
    showToastSuccess(
      "Đăng kí thành công ! Vui lòng đợi 3 giây quay về trang đăng nhập!"
    );
    setTimeout(() => {
      window.location.replace("/page/auth/login.html");
    }, 3000);
  }
};
