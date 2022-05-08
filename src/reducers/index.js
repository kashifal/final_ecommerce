import { combineReducers } from "redux";

const CartReducer = (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    const t = [...state];

    const x = {
      id: action.payload.id,
      title: action.payload.name,
      img: action.payload.img,
      price: action.payload.price * action.payload.quantity,
      quantity: action.payload.quantity,
    };

    const found = t.reduce(
      (accumulator, vendor) => accumulator || vendor.id === x.id,
      false
    );
    if (found) {
      return [...state];
    }
    return [
      ...state,
      {
        id: action.payload.id,
        title: action.payload.name,
        img: action.payload.img,
        price: action.payload.price * action.payload.quantity,
        quantity: action.payload.quantity,
        notification: action.payload.notify,
      },
    ];
  } else if (action.type === "DELETE") {
    var removeIndex = state.map((item) => item.id).indexOf(action.payload);

    ~removeIndex && state.splice(removeIndex, 1);
    return [...state];
  }
  return state;
};

const WishlistReducer = (state = [], action) => {
  if (action.type === "WISH_LISTED") {
    const t = [...state];

    const x = {
      id: action.payload.id,
      title: action.payload.name,
      img: action.payload.img,
      price: action.payload.price,
      added: action.payload.added,
    };

    const found = t.reduce(
      (accumulator, vendor) => accumulator || vendor.id === x.id,
      false
    );
    if (found) {
      return [...state];
    }
    return [
      ...state,
      {
        id: action.payload.id,
        title: action.payload.name,
        img: action.payload.img,
        price: action.payload.price,
        added: action.payload.added,
      },
    ];
  }

  return state;
};

const ShowSideBar = (state = false, action) => {
  if (action.type === "SHOW") {
    return true;
  } else if (action.type === "HIDE") {
    return false;
  }
  return state;
};

const CounterReducer = (state = 1, action) => {
  if (action.type === "INCREAMENT") {
    return state + 1;
  } else if (action.type === "DECREAMENT") {
    if (state < 0) {
      return state * 0;
    } else {
      return state - 1;
    }
  }
  return state;
};

const modeReducer = (state = false, action) => {
  if (action.type === "DARK_MODE") {
    return true;
  } else if (action.type === "LIGHT_MODE") {
    return false;
  }
  return state;
};

export default combineReducers({
  CartReducer: CartReducer,
  WishlistReducer: WishlistReducer,
  ShowSideBar: ShowSideBar,
  CounterReducer: CounterReducer,
  modeReducer: modeReducer,
});
