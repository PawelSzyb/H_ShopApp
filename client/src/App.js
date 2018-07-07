import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";

import "./App.css";

import AppNavBar from "./components/AppNavBar";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import LandingPage from "./components/landing/LandingPage";
import Footer from "./components/landing/Footer";
import WomenPage from "./components/women/WomenPage";
import MenPage from "./components/men/MenPage";

// Check for token
if (localStorage.jwToken) {
  // Set auth header
  setAuthToken(localStorage.jwToken);
  // Decode token
  const decoded = jwt_decode(localStorage.jwToken);
  // Set current user with info from decode
  store.dispatch(setCurrentUser(decoded));

  // Logout user if token expires
  const currentTime = Date.now() / 1000;
  if (currentTime > decoded.exp) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavBar />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/ona" component={WomenPage} />
              <Route exact path="/on" component={MenPage} />
            </div>
            <Route exact path="/" component={Footer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
