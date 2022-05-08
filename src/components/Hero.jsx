import React from "react";
import { useState, useEffect } from "react";
import meme_img_0 from "../images/meme_0.jpeg";
import meme_img_1 from "../images/meme_1.jpeg";
import meme_img_2 from "../images/meme_2.jpeg";
import meme_img_3 from "../images/meme_3.jpeg";
import meme_img_4 from "../images/meme_4.jpeg";
import meme_img_5 from "../images/meme_5.jpeg";
import { connect } from "react-redux";
import { Cart, Wishlist, increament, decreament } from "../actions";
const HomeData = [
  {
    id: 0,
    name: "Funny Coding Shirt",
    price: 10,
    imgSrc: meme_img_0,
    quantity: 0,
  },
  {
    id: 1,
    name: "Programming Shirt",
    price: 12,
    imgSrc: meme_img_1,
    quantity: 0,
  },
  { id: 2, name: "Java Shirt", price: 14, imgSrc: meme_img_2, quantity: 0 },
  {
    id: 3,
    name: "Programming Shirt",
    price: 9,
    imgSrc: meme_img_3,
    quantity: 0,
  },
  { id: 4, name: "Cloud Shirt", price: 10, imgSrc: meme_img_4, quantity: 0 },
  { id: 5, name: "React Shirt", price: 12, imgSrc: meme_img_5, quantity: 0 },
];

const Hero = (props) => {
  const wishIndexx = props.data_wish?.map((w) => {
    return w.id;
  });
  const cartIndexx = props.data_cart?.map((w) => {
    return w.id;
  });
  return (
    <div className="hero">
      {HomeData?.map((d, index) => {
        return (
          <div key={d.id} className="card">
            <div className="img">
              <img src={d.imgSrc} alt="" />
            </div>
            <div className="abs">
              <h3>{d.name}</h3>
              <div className="dropdown">
                <button
                  style={
                    cartIndexx.includes(index)
                      ? { backgroundColor: "white" }
                      : { backgroundColor: "#6fb150" }
                  }
                  onClick={
                    d.quantity === 0
                      ? ""
                      : () =>
                          props.Cart({
                            id: d.id,
                            name: d.name,
                            img: d.imgSrc,
                            price: d.price,
                            added: true,
                            quantity: d.quantity,
                          })
                  }
                >
                  {d.quantity === 0
                    ? " How many? "
                    : cartIndexx.includes(d.id)
                    ? "added"
                    : "add to cart"}
                </button>

                <div className="love">
                  <i
                    onClick={() =>
                      props.Wishlist({
                        id: d.id,
                        name: d.name,
                        img: d.imgSrc,
                        price: d.price,
                        added: true,
                      })
                    }
                    className={
                      wishIndexx.includes(index)
                        ? "fa fa-heart"
                        : "fa fa-heart-o"
                    }
                  ></i>
                </div>

                <h3>${d.price}</h3>
                <div className="counter">
                  <button
                    onClick={() =>
                      props.increament((d.quantity = d.quantity + 1))
                    }
                  >
                    +
                  </button>
                  <span className="count">{d.quantity}</span>
                  <button
                    onClick={() =>
                      props.decreament(
                        d.quantity <= 0
                          ? (d.quantity = 0)
                          : (d.quantity = d.quantity - 1)
                      )
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const StateMapToProp = (state) => {
  return {
    data_cart: state.CartReducer,
    data_wish: state.WishlistReducer,
    CounterReducer: state.CounterReducer,
    modeReducer: state.modeReducer,
  };
};

export default connect(StateMapToProp, {
  Cart,
  Wishlist,
  increament,
  decreament,
})(Hero);
