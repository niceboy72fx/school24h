import { morkDataDefault } from "../asset/json/default.js";
//-------------------------------COMMON----------------
export const activeDB = () => {
  // if (!localStorage.getItem("account") && !localStorage.getItem("courses")) {
  // }
  localStorage.setItem(
    "account",
    JSON.stringify({
      table_name: "account",
      table_data: [
        {
          user_id: 0,
          user_name: "hoang72fx",
          user_password: "12345",
          role: "admin",
        },
      ],
    })
  );
  localStorage.setItem(
    "courses",
    JSON.stringify({
      table_name: "courses",
      table_data: [
        {
          id: 0,
          courseName: "CSS Stylesheet",
          author: "rock lee",
          is_ok: true,
          question: morkDataDefault,
        },
      ],
    })
  );
};
//------------------------------Auth Context ----------------
export const authGenerator = (props) => {
  props.flag
    ? localStorage.setItem("accessToken", props.role)
    : () => {
        localStorage.getItem("accessToken").clear();
        window.location.replace("/index.html");
      };
  if (props.role == "user" || props.role == "admin") {
    window.location.replace("/page/layout/index.html");
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  window.location.replace("/page/auth/login.html");
};
//------------------------------Account----------------
export const fetchAllAccount = () => {
  const { table_data } = JSON.parse(localStorage.getItem("account"));
  return table_data;
};

export const postAccount = (req) => {
  const data = fetchAllAccount();
  data.push({
    user_id: data.length + 1,
    user_name: req.user_name,
    user_password: req.user_password,
    role: "user",
  });
  localStorage.setItem(
    "account",
    JSON.stringify({
      table_name: "account",
      table_data: data,
    })
  );
  console.log(data);
};

export const putAccount = (user_id, value) => {
  const data = fetchAllAccount();
  data.forEach((temp) => (temp.user_id == user_id ? temp.value : value));
  localStorage.setItem(
    "account",
    JSON.stringify({
      table_name: "account",
      table_data: data,
    })
  );
};

export const deleteAccount = (user_id) => {
  const data = fetchAllAccount();
  const findIndexToRemove = data.findIndex((item) => item.user_id === user_id);
  if (findIndexToRemove !== -1) {
    data.splice(findIndexToRemove, 1);
  }
  localStorage.setItem(
    "account",
    JSON.stringify({
      table_name: "account",
      table_data: data,
    })
  );
};

//---------------------------fetch all data------------------------

//-----------------Course---------------------
export const fetchAllCourse = () => {
  const { table_data } = JSON.parse(localStorage.getItem("courses"));
  return table_data;
};

export const postCourse = (req) => {
  const data = fetchAllCourse();
  const userName = localStorage.getItem("userName");
  data.push({
    id: data.length == 1 ? 1 : data.length + 1,
    courseName: req.courseName,
    author: userName,
    is_ok: true,
    question: [],
  });
  localStorage.setItem(
    "courses",
    JSON.stringify({
      table_name: "courses",
      table_data: data,
    })
  );
};

export const deleteCourse = (id) => {
  const data = fetchAllCourse();
  const findIndexToRemove = data.findIndex((item) => item.id === id);
  if (findIndexToRemove !== -1) {
    data.splice(findIndexToRemove, 1);
  }
  localStorage.setItem(
    "courses",
    JSON.stringify({
      table_name: "courses",
      table_data: data,
    })
  );
};

//-----------------Question-------------------
export const fetchAllQuestion = (id) => {
  const { table_data } = JSON.parse(localStorage.getItem("courses"));
  const allQuestion = table_data.find((item) => item.id === id);
  return allQuestion.question;
};

export const postQuestion = (req) => {};

export const putQuestion = (id) => {};

export const deleteQuestion = (id) => {};

//-------------------------------------------
