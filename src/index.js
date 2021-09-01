import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Customers from "./Customers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Rentals from "./Rentals";
import Login from "./Login";

ReactDOM.render(
    <Router>
    <Navbar/>
    <Switch>

    <Route path="/customers">
    <Customers/>
    </Route>

    <Route path="/login">
    <Login/>
    </Route>

    <Route path="/rentals">
    <Rentals/>
    </Route>

    <Route path="/">
    <App/>
    </Route>

    </Switch>
    </Router>,
document.getElementById("root"));
