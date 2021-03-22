import './App.sass';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "../FoodItems/FoodItems"

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path='/'>
                    Hello World
                </Route>
                <Route exact path='/home'>
                    <Home/>
                </Route>
                <Route exact path='/shoppingcart'>
                    <ShoppingCart/>
                </Route>
                <Route exact path='/FoodItems'>
                    <FoodItems />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
