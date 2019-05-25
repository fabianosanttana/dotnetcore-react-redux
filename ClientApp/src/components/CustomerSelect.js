import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/Customer";

class CustomerSelect extends Component {
  componentDidMount() {
    this.props.requestCustomers();
  }

  render() {
    return (
      <select ref={this.props.ref}>
        {this.props.customers.map(customer => (
          <option value={customer.customerID}>{customer.name}</option>
        ))}
      </select>
    );
  }
}

export default connect(
  state => state.customer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(CustomerSelect);
