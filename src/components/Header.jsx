import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
  const name = "Hi";
  return (
    <div
      style={
        props.modeReducer
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "#6fb150" }
      }
      className="header"
    >
      <p>
        <i className="fa fa-hand-o-right"></i> {name}{" "}
        {props.data_wish.length > 0
          ? " We have heard, You made a wish, fulfil now Get 55% discount"
          : "45% off for you!!!"}
      </p>
    </div>
  );
};

const wish = (state) => {
  return { data_wish: state.WishlistReducer, modeReducer: state.modeReducer };
};

export default connect(wish)(Header);
