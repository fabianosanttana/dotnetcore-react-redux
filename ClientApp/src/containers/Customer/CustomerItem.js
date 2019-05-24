import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/Customer";

class CustomerItem extends Component {
  render() {
    console.log(this.props.customer);
    return (
      <div className="customer">
        <ul className="customer_info">
          <li className="customer_title">Name: {this.props.customer.name}</li>
          <li className="customer_message">Last Name: {this.props.customer.lastName}</li>
          <li>Phone: {this.props.customer.phone} SSN: {this.props.ssn} </li>
          <li>E-mail: {this.props.customer.email}</li>
        </ul>
        <div className="control-buttons">
          <button
            className="edit"
            onClick={() =>
              this.props.dispatch({ type: "EDIT_POST", id: this.props.customer.customerID })
            }
          >
            Edit
          </button>
          <button
            className="delete"
            onClick={() =>
              alert('oi')
              // this.props.

              // this.props.dispatch({
              //   type: "DELETE_POST",
              //   id: this.props.post.id
              // })
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
