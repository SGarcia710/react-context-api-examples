import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Reports from "../Pages/Reports";
import Layout from "../Components/Layout";

const Root = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/reports" component={Reports} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Root;
