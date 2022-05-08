import React from "react";
import Hero from "../components/Hero";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <div className={props.modeReducer === true ? "dark" : "light"}>
      <Hero />
    </div>
  );
};

const funcs = (state) => {
  return { modeReducer: state.modeReducer };
};
export default connect(funcs)(Home);
