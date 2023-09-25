export const increment = () => {
  return {
    type: "INCREMENT"
  }
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  }
};
export const incrementByamt = (inputs) => {
  return {
    type: "INCREMENTBYAMT",
     payload:inputs
  };
};
