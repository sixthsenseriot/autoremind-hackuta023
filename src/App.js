import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyCars from "./components/pages/MyCars";
import SignUp from "./components/pages/SignUp";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />          
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/MyCars" component={MyCars} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
