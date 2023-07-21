export const Table = (list, props) => {
  const element = document.createElement("div");
  const role = localStorage.getItem("accessToken");
  element.setAttribute("class", "table");
  console.log(props);
  element.innerHTML = `
     <table id="table" >
      <thead>
        <tr class="table-header">
          ${list.map((item) => `<th>${item}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
         ${props.map(
           (item) => `<tr >
           <th>${item.id + 1}</th>
           <th>${item.courseName}</th>
           <th>${item.is_ok ? "Mở" : "Đóng"}</th>
           <th >
            <i  id="edit" onclick="eventListenCourse('${
              item.id
            }')" class="fa-regular fa-pen-to-square" style="margin-left: 12px ; margin-rightL 12px"></i>
            ${
              role == "admin"
                ? `<i onclick="deletePopupCourse('${item.id}')" class="fa-solid fa-trash" style="margin-left: 12px ; margin-rightL 12px"></i>`
                : ``
            } 
           </th>
         </tr>`
         )}
      </tbody>
    </table>
   `;
  return { element };
};

export const TableCourse = (list, props) => {
  const element = document.createElement("div");
  element.setAttribute("class", "tableCourse");
  element.innerHTML = `
     <table id="table">
      <thead>
        <tr class="table-header">
          ${list.map((item) => `<th>${item}</th>`).join("")}
        </tr>
      </thead>
        <tbody style="height:400px;overflow:scroll;">
         ${props.map(
           (item) => `<tr>
           <th>${item.id}</th>
           <th style="text-align:left" >${item.question}</th>
           <th>${item.options.length}</th>
           <th>${item.author}</th>
           <th>${item.is_ok ? "Duyệt" : "Chưa Duyệt"}</th>
           <th>${item.pendings ? "Chờ xem" : "Đã xem"}</th>
           <th >
            <i  onclick="eventListen('${
              item.id
            }')" id="edit" class="fa-regular fa-pen-to-square" style="margin-left: 12px ; margin-rightL 12px"></i>
            <i onclick="deletePopupCourseWin('${
              item.id
            }')" class="fa-solid fa-trash" style="margin-left: 12px ; margin-rightL 12px"></i>
           </th>
         </tr>`
         )}
      </tbody>
    </table>
   `;
  return { element };
};

export const TableUserAdmin = (list, props) => {
  const element = document.createElement("div");
  element.setAttribute("class", "table");
  element.innerHTML = `
     <table id="table" >
      <thead>
        <tr class="table-header">
          ${list.map((item) => `<th>${item}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
         ${props.map(
           (item) => `<tr >
           <th>${item.user_id}</th>
           <th>${item.user_name}</th>
           <th>${item.role}</th>
           <th >
            ${
              item.role == "admin"
                ? ``
                : `
              <i id="edit" onclick="eventListenCourse('${item.user_id}')" class="fa-regular fa-pen-to-square" style="margin-left: 12px ; margin-rightL 12px"></i>
            <i onclick="deletePopupUser('${item.user_id}')" class="fa-solid fa-trash" style="margin-left: 12px ; margin-rightL 12px"></i>
            `
            }
           </th>
         </tr>`
         )}
      </tbody>
    </table>
   `;
  element.setAttribute("id", "re-container");
  return { element };
};
