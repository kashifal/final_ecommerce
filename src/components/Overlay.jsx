import React from "react";
import { connect } from "react-redux";
import { HideSideBar } from "../actions";

const Overlay = (props) => {
  return (
    <div
      onClick={() => props.HideSideBar()}
      style={props.ShowSideBar ? { display: "block" } : { display: "none" }}
      className="overlay"
    ></div>
  );
};

const checkData = (state) => {
  return { ShowSideBar: state.ShowSideBar };
};
export default connect(checkData, { HideSideBar })(Overlay);
