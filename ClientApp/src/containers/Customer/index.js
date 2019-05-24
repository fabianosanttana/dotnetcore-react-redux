import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../../store/Customer";
import Form from "./Form";
import AllCustomers from "./AllCustomers";
import "./style.css";

class Customer extends Component {
  render() {
    return (
      <div>
        <h1>Customers</h1>
        <p>
          This component demonstrates fetching data from the server and working
          with URL parameters.
        </p>
        <div class="customers-container">
          <Form />
          <AllCustomers />
        </div>
      </div>
    );
  }
}

function renderCustomersTable(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>SSN</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {props.customers.map(customer => (
          <tr key={customer.customerID}>
            <td>{customer.ssn}</td>
            <td>{customer.name}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
            <td>{customer.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default connect(
  state => state.customer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Customer);
