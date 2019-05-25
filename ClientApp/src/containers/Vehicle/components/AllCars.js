import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CarItem from "./CarItem";
import EditComponent from "./EditComponent";
import { actionCreators } from "../../../store/Car";
import Tabs from "react-bootstrap/Tabs";
import Tab from 'react-bootstrap/Tab';

class AllCars extends Component {
  componentDidMount() {
    this.props.requestCars();
  }
  render() {
    return (
      <div className="customer-container">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="available" title="Available">
            <h1 className="customer_heading">
              All Cars Available <span>{this.props.cars.length}</span>
            </h1>
            {this.props.cars.map(car => (
              <div key={car.carID}>
                {car.editing ? (
                  <EditComponent car={car} key={car.carID} />
                ) : (
                  <CarItem car={car} key={car.carID} />
                )}
              </div>
            ))}
          </Tab>
          <Tab eventKey="rental" title="Rental">
            <h1>oi</h1>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default connect(
  state => state.car,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(AllCars);
