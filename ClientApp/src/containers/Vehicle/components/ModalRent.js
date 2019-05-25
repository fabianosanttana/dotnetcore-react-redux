import React from "react";
import Modal from "react-bootstrap/Modal";
import CustomerSelect from '../../../components/CustomerSelect';

export default class ModalRentCar extends React.Component {
  handleRentCar = () => {
    const CarID = this.props.car.carID;
    const PickupDate = this.getPickupDate.value;
    const ReturnDate = this.getReturnDate.value;
    const CustomerID = this.getClient.value;
    const data = {
      CarID,
      PickupDate,
      ReturnDate,
      CustomerID
    };
    console.log(data);
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
            {this.props.car.brand}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomerSelect ref={input => (this.getClient = input)} />{" "}
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
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.onHide}>Close</button>
          <button onClick={() => this.handleRentCar()}>Rent Car</button>
        </Modal.Footer>
      </Modal>
    );
  }
}
