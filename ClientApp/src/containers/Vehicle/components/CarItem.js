import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/Car";
import Modal from 'react-bootstrap/Modal'
import ModalRentCar from './ModalRent';

class CarItem extends Component {
  state = {
    modalShow: false
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
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
            Rent Car
          </button>
          <button
            className="rent"
            onClick={() => this.setState({ modalShow: true })}
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
        <ModalRentCar
          car={this.props.car}
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </div>
    );
  }
}
export default connect(
  state => state.car,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(CarItem);
