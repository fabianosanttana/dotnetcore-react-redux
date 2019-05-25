import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/Car";

class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const CarID = this.props.carID;
    const Brand = this.getBrand.value;
    const Model = this.getModel.value;
    const Year = this.getYear.value;
    const Color = this.getColor.value;
    const DailyPrice = this.getDailyPrice.value;
    const Availeble = true;
    const Notes = this.getNotes.value;
    
    const data = {
      CarID,
      Brand,
      Model,
      Year,
      Color,
      DailyPrice,
      Availeble,
      Notes
    };

    this.props.addCar(data);
    this.getYear.value = "";
    this.getModel.value = "";
    this.getBrand.value = "";
    this.getColor.value = "";
    this.getDailyPrice.value = "";
    this.getNotes.value = "";
  };
  render() {
    return (
      <div key={this.props.car.carID} className="customer">
        <form className="form" onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={input => (this.getBrand = input)}
            defaultValue={this.props.car.brand}
            placeholder="Brand"
          />{" "}
          <input
            required
            type="text"
            ref={input => (this.getModel = input)}
            defaultValue={this.props.car.model}            
            placeholder="Model"
          />{" "}
          <input
            required
            type="number"
            defaultValue={this.props.car.year}
            ref={input => (this.getYear = input)}
            placeholder="Year"
          />{" "}
          <input
            required
            type="text"
            ref={input => (this.getColor = input)}
            defaultValue={this.props.car.color}
            placeholder="Color"
          />{" "}
          <input
            required
            type="number"
            ref={input => (this.getDailyPrice = input)}
            defaultValue={this.props.car.dailyPrice}
            placeholder="Daily Price"
          />{" "}
          <textarea
            required
            defaultValue={this.props.car.notes}
            ref={input => (this.getNotes = input)}
            placeholder="Notes"
          />{" "}
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => state.car,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(EditComponent);
