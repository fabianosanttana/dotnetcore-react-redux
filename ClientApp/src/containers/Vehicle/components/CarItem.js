import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/Car";

class CarItem extends Component {
  render() {
    debugger;
    return (
      <div className="customer">
        <ul className="customer_info">
          <li className="customer_title">Brand: {this.props.car.brand}</li>
          <li className="customer_message">Model: {this.props.car.model}</li>
          <li>Year: {this.props.car.year} Color: {this.props.car.color} </li>
          <li>Rented Days: {this.props.car.rentedDays} Daily Price: {this.props.car.dailyPrice} </li>
          <li>Notes: {this.props.car.notes}</li>
        </ul>
        <div className="control-buttons">
          <button
            className="edit"
            onClick={() =>
              this.props.editCar(this.props.car.carID)
            }
          >
            Edit
          </button>
          <button
            className="delete"
            onClick={() =>
              this.props.deleteCar(this.props.car.carID)
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
  state => state.car,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(CarItem);
