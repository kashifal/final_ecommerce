export const Cart = (item) => {
  return { type: "ADD_TO_CART", payload: item };
};

export const Wishlist = (val) => {
  return { type: "WISH_LISTED", payload: val };
};

export const ShowSideBar = (val) => {
  return { type: "SHOW", payload: val };
};

export const HideSideBar = () => {
  return { type: "HIDE" };
};

export const increament = () => {
  return { type: "INCREAMENT" };
};

export const decreament = () => {
  return { type: "DECREAMENT" };
};

export const deleteItem = (val) => {
  return { type: "DELETE", payload: val };
};

export const darkMode = () => {
  return { type: "DARK_MODE" };
};

export const lightMode = () => {
  return { type: "LIGHT_MODE" };
};
