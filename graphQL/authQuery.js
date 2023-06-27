import account from "../mongoDB/account.json";

const [table_data] = account;

export const getQueryAccount = (req) => {
  for (data in table_data) {
    return req.userName == data.user_id &&
      req.userPassword == data.user_password
      ? true
      : false;
  }
};

export const test = () => {
  return "oke";
};

export const registerQueryAccount = (req) => {
  const temp = table_data.map((data) =>
    req.userName == data.user_id && req.userPassword == data.user_password
      ? true
      : false
  );
  const registerAccount = (req) => {
    const data = {
      user_id: table_data.length() + 1,
      user_name: req.userName,
      user_password: req.userPassword,
      role: "user",
    };
    table_data.append(data);
    return { comment: "Already registered", registed: true };
  };
  return temp == true
    ? { comment: "Account has been exist! ", registed: false }
    : registerAccount(req);
};
