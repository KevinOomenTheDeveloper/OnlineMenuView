import './App.sass';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "bootstrap/dist/css/bootstrap.min.css";

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
            </Switch>
        </Router>
    </div>
  );
}

export default App;
