import React from "react";
import { connect } from "react-redux";
import { ShowSideBar, HideSideBar, darkMode, lightMode } from "../actions";

const Logo = (props) => {
  return (
    <div className="logo">
      <div className="logo_one"></div>
      <div className="logo_center">
        <h1>Kashee's</h1>
      </div>
      <div className="logo_two">
        <i
          className={
            props.modeReducer === true ? "fa fa-moon-o" : "fa fa-sun-o"
          }
          onClick={
            props.modeReducer === true
              ? () => props.lightMode()
              : () => props.darkMode()
          }
        ></i>
        <div className="hearts">
          <div className="quantity">{props.data_wish.length}</div>

          <i
            style={{ cursor: "pointer" }}
            className={
              props.data_wish.length > 0 ? "fa fa-heart" : "fa fa-heart-o"
            }
          ></i>
        </div>
        <div className="cart">
          <div className="quantity">{props.getLength.length}</div>
          <i
            style={{ cursor: "pointer" }}
            onClick={() => props.ShowSideBar()}
            className="fa fa-shopping-bag"
          ></i>
        </div>
      </div>
    </div>
  );
};

const MyData = (state) => {
  return {
    getLength: state.CartReducer,
    data_wish: state.WishlistReducer,
    value: state.ShowSideBar,
    modeReducer: state.modeReducer,
  };
};

export default connect(MyData, {
  ShowSideBar,
  HideSideBar,
  darkMode,
  lightMode,
})(Logo);
