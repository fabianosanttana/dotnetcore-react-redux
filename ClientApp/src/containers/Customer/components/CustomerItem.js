import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/Customer";

class CustomerItem extends Component {
  render() {
    return (
      <div className="customer">
        <ul className="customer_info">
          <li className="customer_title">Name: {this.props.customer.name}</li>
          <li className="customer_message">Last Name: {this.props.customer.lastName}</li>
          <li>Phone: {this.props.customer.phoneNumber} SSN: {this.props.customer.ssn} </li>
          <li>E-mail: {this.props.customer.email}</li>
        </ul>
        <div className="control-buttons">
          <button
            className="edit"
            onClick={() =>
              this.props.editCustomer(this.props.customer.customerID)
            }
          >
            Edit
          </button>
          <button
            className="delete"
            onClick={() =>
              this.props.deleteCustomer(this.props.customer.customerID)
            }
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default connect(
  state => state.customer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(CustomerItem);
