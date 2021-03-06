import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Car from "./containers/Vehicle";
import Customer from "./containers/Customer";
import "./App.css";

export default () => (
  <Layout>
    <Route exact path="/" component={Car} />
    <Route path="/car" component={Car} />
    <Route path="/customer" component={Customer} />
  </Layout>
);
