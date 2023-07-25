export const useState = (initValue) => {
  let state = initValue;
  const setState = (value) => {
    state = value;
  };
  const getState = () => {
    return state;
  };
  return { setState, getState };
};

export const refreshComponent = (component) => {
  // const userContainer = document.getElementById(component);
  // userContainer.innerHTML = "";
  // const refreshedComponent = ;
  // userContainer.appendChild(refreshedComponent);
};
