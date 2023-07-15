import {
  authGenerator,
  fetchAllAccount,
  postAccount,
} from "../middleWare/index.js";

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
    console.log(true);
  };
  registerAccount(req);
  // return { comment: "Already registered", registed: true };
};

// { comment: "Account has been exist! ", registed: false
