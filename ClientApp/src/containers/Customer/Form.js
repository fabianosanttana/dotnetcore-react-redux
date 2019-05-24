import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/Customer';

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const Name = this.getName.value;
    const LastName = this.getLastName.value;
    const Email = this.getEmail.value;
    const PhoneNumber = this.getPhone.value;
    const SSN = this.getSSN.value;

    const data = {
      Name,
      LastName,
      Email,
      PhoneNumber,
      SSN,
      isEditing: false
    };

    this.props.addCustomer(data);
    this.getEmail.value = '';
    this.getLastName.value = '';
    this.getName.value = '';
    this.getPhone.value = '';
    this.getSSN.value = '';
  };

  render() {
    return (
      <div className="customer-container">
        <h1 className="customer_heading"> Create Customer </h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getName = input)}
            placeholder="Name"
          />{" "}
          <input
            required
            type="text"
            ref={input => (this.getLastName = input)}
            placeholder="Last Name"
          />{" "}
          <input
            required
            type="email"
            ref={input => (this.getEmail = input)}
            placeholder="Email"
          />{" "}
          <input
            required
            type="phone"
            ref={input => (this.getPhone = input)}
            placeholder="Phone"
          />{" "}
          <input
            required
            type="text"
            ref={input => (this.getSSN = input)}
            placeholder="SSN"
          />{" "}
          <button> Create </button>
        </form>
      </div>
    );
  }
}
export default connect(
  state => state.customer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Form);
