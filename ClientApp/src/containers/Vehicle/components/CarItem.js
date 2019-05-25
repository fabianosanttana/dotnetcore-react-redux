import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/Car";
import ModalRentCar from "./ModalRent";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class CarItem extends Component {
  state = {
    modalShow: false
  };

  handleReturnCar = () =>
  {
    confirmAlert({
      title: "Confirm to submit",
      message: `Do you confirm the receipt of the vehicle?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.returnCar( {...this.props.car, available: true})
        },
        {
          label: "No",
          onClick: () => console.log("cancel")
        }
      ]
    });
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div className="customer">
        <ul className="customer_info">
          <li className="customer_title">Brand: {this.props.car.brand}</li>
          <li className="customer_message">Model: {this.props.car.model}</li>
          <li>
            Year: {this.props.car.year} Color: {this.props.car.color}{" "}
          </li>
          <li>
            Rented Days: {this.props.car.rentedDays} Daily Price:{" "}
            {this.props.car.dailyPrice}{" "}
          </li>
          <li>Notes: {this.props.car.notes}</li>
        </ul>
        {this.props.car.available ? (
          <div className="control-buttons">
            <button
              className="edit"
              onClick={() => this.props.editCar(this.props.car.carID)}
            >
              Edit
            </button>
            <button
              className="rent"
              onClick={() => this.setState({ modalShow: true })}
            >
              Rent Car
            </button>
            <button
              className="delete"
              onClick={() => this.props.deleteCar(this.props.car.carID)}
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="control-buttons">
            <button
              className="rent"
              onClick={() => this.handleReturnCar()}
            >
              Confirm return
            </button>
          </div>
        )}
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
