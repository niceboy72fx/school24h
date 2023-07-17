import { morkDataDefault } from "../asset/json/default.js";
//-------------------------------COMMON----------------
export const activeDB = () => {
  if (!localStorage.getItem("account") && !localStorage.getItem("courses")) {
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
  }
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
  window.location.replace("/index.html");
};
//------------------------------Account----------------
export const fetchAllAccount = () => {
  const { table_data } = JSON.parse(localStorage.getItem("account"));
  return table_data;
};

export const postAccount = (req) => {
  const data = fetchAllAccount();
  console.log(req);
  data.push(req);
  localStorage.setItem(
    "account",
    JSON.stringify({
      table_name: "account",
      table_data: data,
    })
  );
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
  data.remove(user_id - 1);
  localStorage.setItem(
    "account",
    JSON.stringify({
      table_name: "account",
      table_data: data,
    })
  );
};

//---------------------------fetch all data------------------------
const { table_data } = JSON.parse(localStorage.getItem("courses"));
//-----------------Course---------------------
export const fetchAllCourse = () => {
  return table_data;
};

export const postCourse = (req) => {};

export const deleteCourse = (id) => {};

//-----------------Question-------------------
export const fetchAllQuestion = () => {
  return table_data.question;
};

export const postQuestion = (req) => {};

export const putQuestion = (id) => {};

export const deleteQuestion = (id) => {};

//-------------------------------------------
