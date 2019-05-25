import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../../store/Car";
import Form from "./components/Form";
import AllCars from "./components/AllCars";
import "./style.css";

class Cars extends Component {
  render() {
    return (
      <div className="customers-container">
        <Form />
        <AllCars />
      </div>
    );
  }
}

export default connect(
  state => state.cars,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Cars);
