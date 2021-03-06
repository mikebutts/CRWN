import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./App.css";

import { auth } from "./firebase/firebase.utils.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscriberFromAuth = null;

  componentDidMount() {
    this.unsubscriberFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscriberFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
