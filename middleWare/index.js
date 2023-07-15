//-------------------------------COMMON----------------
export const activeDB = () => {
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
    JSON.stringify({ table_name: "courses", table_data: [] })
  );
  localStorage.setItem(
    "questions",
    JSON.stringify({ table_name: "questions", table_data: [] })
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
  if (props.role == "user") {
    window.location.replace("/index.html");
  }
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

//------------------------------Course---------------------
export const fetchAllCourse = () => {};

export const postCourse = (req) => {};

export const deleteCourse = (id) => {};

//------------------------------Question-------------------
export const fetchAllQuestion = () => {};

export const postQuestion = (req) => {};

export const putQuestion = (id) => {};

export const deleteQuestion = (id) => {};

//-------------------------------------------------
