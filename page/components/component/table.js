export const Table = (list, props) => {
  const element = document.createElement("div");
  element.setAttribute("class", "table");
  element.innerHTML = `
     <table>
      <thead>
        <tr >
          ${list.map((item) => `<th>${item}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
         
      </tbody>
    </table>
   `;
  return { element };
};
