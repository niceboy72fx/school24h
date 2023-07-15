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
