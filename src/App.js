import React from "react";
import { Switch, Route} from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const HatsPage = () => (
  <div>
    <h1> HatsPage </h1>
  </div>
)
const JacketsPage = () => (
  <div>
    <h1> We got dem JAckets </h1>
  </div>
)
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/shop/jackets' component={JacketsPage} />
      </Switch>
    </div>
  );
}

export default App;
