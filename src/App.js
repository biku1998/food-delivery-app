import "./App.css";
import "./Utils/utils.css";
import Home from "./containers/Home/Home";
import Restaurants from "./containers/Restaurants/Restaurants";
import RestaurantMenu from "./containers/RestaurantMenu/RestaurantMenu";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basename="/food-delivery-app">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/restaurants" exact component={Restaurants} />
        <Route path="/restaurants/:id" exact component={RestaurantMenu} />
      </Switch>
    </Router>
  );
}

export default App;
