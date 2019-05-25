import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store/Customer';

class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const Name = this.getName.value;
    const LastName = this.getLastName.value;
    const Email = this.getEmail.value;
    const PhoneNumber = this.getPhone.value;
    const SSN = this.getSSN.value;
    const CustomerID = this.props.customer.customerID;
    const data = {
      CustomerID,
      Name,
      LastName,
      Email,
      PhoneNumber,
      SSN,
      editing: false
    };

    this.props.updateCustomer(data);
    this.getEmail.value = '';
    this.getLastName.value = '';
    this.getName.value = '';
    this.getPhone.value = '';
    this.getSSN.value = '';
  };
  render() {
    return (
      <div key={this.props.customer.customerID} className="customer">
        <form className="form" onSubmit={this.handleEdit}>
        <input
            required
            type="text"
            ref={input => (this.getName = input)}
            defaultValue={this.props.customer.name}
            placeholder="Name"
          />{" "}
          <input
            required
            type="text"
            ref={input => (this.getLastName = input)}
            placeholder="Last Name"
            defaultValue={this.props.customer.lastName}
          />{" "}
          <input
            required
            type="email"
            ref={input => (this.getEmail = input)}
            defaultValue={this.props.customer.email}
            placeholder="Email"
          />{" "}
          <input
            required
            type="phone"
            ref={input => (this.getPhone = input)}
            defaultValue={this.props.customer.phoneNumber}
            placeholder="Phone"
          />{" "}
          <input
            required
            type="text"
            ref={input => (this.getSSN = input)}
            defaultValue={this.props.customer.ssn}
            placeholder="SSN"
          />{" "}
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => state.customer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(EditComponent);

