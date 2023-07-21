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
  const userContainer = document.getElementById("re-container");
  userContainer.innerHTML = "";
  const refreshedComponent = component;
  userContainer.appendChild(refreshedComponent);
};
