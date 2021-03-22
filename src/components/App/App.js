import './App.sass';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Example from "../Example/Example";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Layout from "../Layout/Layout";
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
                    <Example/>
                </Route>
                <Route exact path='/home'>
                    <Layout>
                        <Home/>
                    </Layout>
                </Route>
                <Route exact path='/shoppingcart'>
                    <Layout>
                        <ShoppingCart/>
                    </Layout>
                </Route>
                <Route exact path='/header'>
                    <Header title="Pasta"/>
                </Route>
                <Route exact path='/footer'>
                    <Footer/>
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
