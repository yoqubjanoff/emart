// for item to  cart
export const addToCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
//



export const removeItem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
//
export const clearCart = () => {
    return {
        type: "CLEAR_CART",
    };
};

//
// export { clearCart };
// for increment
// const increment = (id) => {
//   return {
//     type: "INCREMENT",
//     payload: id,
//   };
// };
//
// export { increment };
// for decrement
// const decrement = (id) => {
//   return {
//     type: "DECREMENT",
//     payload: id,
//   };
// };
//
// export { decrement };
// for get total
// const getTotal = () => {
//   return {
//     type: "GET_TOTAL",
//   };
// };
//
// export { getTotal };
// for get total
// const toggleAmount = (id, toggle) => {
//   return {
//     type: "TOGGLE_AMOUNT",
//     payload: { id, toggle },
//   };
// };
//