import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CustomerItem from "./CustomerItem";
import EditComponent from "./EditComponent";
import { actionCreators } from "../../store/Customer";

class AllCustomers extends Component {
  componentDidMount() {
    this.props.requestCustomers();
    console.log(this.props.customers);
  }
  render() {
    return (
      <div className="customer-container">
        <h1 className="customer_heading">All Customers <span>{this.props.customers.length}</span></h1>
        {this.props.customers.map(customer => (
          <div key={customer.customerID}>
            {customer.editing ? (
              <EditComponent customer={customer} key={customer.customerID} />
            ) : (
              <CustomerItem customer={customer} key={customer.customerID} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  state => state.customer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(AllCustomers);
