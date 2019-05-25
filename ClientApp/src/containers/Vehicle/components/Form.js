import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/Car";

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const Brand = this.getBrand.value;
    const Model = this.getModel.value;
    const Year = this.getYear.value;
    const Color = this.getColor.value;
    const DailyPrice = this.getDailyPrice.value;
    const Notes = this.getNotes.value;
    const Availeble = true;
    const data = {
      Brand,
      Model,
      Year,
      Color,
      DailyPrice,
      Notes,
      Availeble
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
      <div className="customer-container">
        <h1 className="customer_heading"> Create Car </h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getBrand = input)}
            placeholder="Brand"
          />{" "}
          <input
            required
            type="text"
            ref={input => (this.getModel = input)}
            placeholder="Model"
          />{" "}
          <input
            required
            type="number"
            ref={input => (this.getYear = input)}
            placeholder="Year"
          />{" "}
          <input
            required
            type="text"
            ref={input => (this.getColor = input)}
            placeholder="Color"
          />{" "}
          <input
            required
            type="number"
            step="0.01"
            ref={input => (this.getDailyPrice = input)}
            placeholder="Daily Price"
          />{" "}
          <textarea
            required
            ref={input => (this.getNotes = input)}
            placeholder="Notes"
          />{" "}
          <button> Create </button>
        </form>
      </div>
    );
  }
}
export default connect(
  state => state.car,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Form);
