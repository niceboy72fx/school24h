export const Table = (list, props) => {
  const element = document.createElement("div");
  const test = () => {
    console.log("i test");
  };
  element.setAttribute("class", "table");
  element.innerHTML = `
     <table id="table">
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
            <i id="edit" class="fa-regular fa-pen-to-square" style="margin-left: 12px ; margin-rightL 12px"></i>
            <i class="fa-solid fa-trash" style="margin-left: 12px ; margin-rightL 12px"></i>
           </th>
         </tr>`
         )}
         
      </tbody>
    </table>
   `;
  element.querySelector("#edit").addEventListener("click", test());
  return { element };
};
