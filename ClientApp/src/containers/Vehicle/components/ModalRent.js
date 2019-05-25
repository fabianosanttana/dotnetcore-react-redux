import React from "react";
import Modal from "react-bootstrap/Modal";
import CustomerSelect from "../../../components/CustomerSelect";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/Car";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class ModalRentCar extends React.Component {
  constructor(props) {
    super(props);
    this.oneRef = React.createRef();
  }

  handleRentCar = (e) => {
    e.preventDefault();
    
    const CarID = this.props.car.carID;
    const PickupDate = this.getPickupDate.value;
    const ReturnDate = this.getReturnDate.value;
    const CustomerID = this.oneRef.current.value;
    const Amount =
      this.date_diff_indays(PickupDate, ReturnDate) * this.props.car.dailyPrice;

    const data = {
      CarID,
      PickupDate,
      ReturnDate,
      CustomerID,
      Amount
    };
    debugger;
    this.props.onHide();
    confirmAlert({
      title: "Confirm to submit",
      message: `You confirm renting the car for the amount of ${Amount}USD`,
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.bookCar(data)
        },
        {
          label: "No",
          onClick: () => console.log("cancel")
        }
      ]
    });
  };

  date_diff_indays = (date1, date2) => {
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  };

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.car.brand} - {this.props.car.dailyPrice}{" "}
            <span>USD per day </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form" onSubmit={this.handleRentCar}>
            <CustomerSelect
              key={this.props.car.CarID}
              customerRef={this.oneRef}
            />{" "}
            <input
              required
              type="date"
              ref={input => (this.getPickupDate = input)}
              placeholder="Pickup Date"
            />{" "}
            <input
              required
              type="date"
              ref={input => (this.getReturnDate = input)}
              placeholder="Return Date"
            />{" "}
            <button>Rent Car</button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default connect(
  state => state.car,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(ModalRentCar);
