﻿import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../../store/Customer";
import Form from "./components/Form";
import AllCustomers from "./components/AllCustomers";
import "./style.css";

class Customer extends Component {
  render() {
    return (
      <div className="customers-container">
        <Form />
        <AllCustomers />
      </div>
    );
  }
}

export default connect(
  state => state.customer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Customer);
