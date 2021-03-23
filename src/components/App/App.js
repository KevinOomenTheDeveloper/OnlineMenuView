import './App.sass';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Example from "../Example/Example";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Layout from "../Layout/Layout";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Layout title="Start">
                        Hello World
                        <Example/>
                    </Layout>
                </Route>
                <Route exact path='/home'>
                    <Layout title="Home">
                        <Home/>
                    </Layout>
                </Route>
                <Route exact path='/shoppingcart'>
                    <Layout title="Shopping cart">
                        <ShoppingCart/>
                    </Layout>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
