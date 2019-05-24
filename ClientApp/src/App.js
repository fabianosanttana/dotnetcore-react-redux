import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import Customer from "./containers/Customer";
import "./App.css";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/counter" component={Counter} />
    <Route path="/customer" component={Customer} />

    <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
  </Layout>
);
