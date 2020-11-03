import "./App.css";
import "./Utils/utils.css";
import Home from "./containers/Home/Home";
import Restaurants from "./containers/Restaurants/Restaurants";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/restaurants" exact component={Restaurants} />
      </Switch>
    </Router>
  );
}

export default App;
