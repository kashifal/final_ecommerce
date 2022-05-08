import React, { useState } from "react";
import { connect } from "react-redux";
import { increament, decreament, deleteItem } from "../actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebbar = (props) => {
  const notify = () => toast("You have no item!");

  const c =
    typeof props.CartReducer !== "undefined" && props.CartReducer.length === 0
      ? ""
      : props.CartReducer.map((item) => item.price).reduce(
          (prev, next) => prev + next
        );

  return (
    <div
      style={props.ShowSideBar ? { display: "block" } : { display: "none" }}
      className="sidebar"
    >
      <h4>Thanks for considering us!</h4>
      <p>Have a nice code</p>
      {props.CartReducer?.map((item, index) => {
        return (
          <div className="item">
            <div className="img">
              <img src={item.img} alt="" />
            </div>
            <div className="item-name">
              <h5>{item.title}</h5>
            </div>
            <i
              onClick={() => props.deleteItem(item.id)}
              style={{
                color: "white",
                width: 26,
                height: 26,
                backgroundColor: "red",
                borderRadius: "13px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="fa fa-trash"
            ></i>
            <div className="item-price">
              <h5>${item.price}</h5>
            </div>
          </div>
        );
      })}
      <div className="total">
        <h3>Total</h3>
        <h3>${c ? c : 0}</h3>
        <button onClick={c ? c : notify}>Confirm order</button>
      </div>
      <ToastContainer />
    </div>
  );
};

const checkData = (state) => {
  return {
    ShowSideBar: state.ShowSideBar,
    CartReducer: state.CartReducer,
    counter: state.CounterReducer,
    DeleteReducer: state.DeleteReducer,
  };
};
export default connect(checkData, { increament, decreament, deleteItem })(
  Sidebbar
);
