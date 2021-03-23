import './App.sass';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Example from "../Example/Example";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Layout from "../Layout/Layout";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";


function App() {

    const [products, setItems] = useState([
        {
            id: 1,
            name: 'Tomato Soup',
            price: "4.00",
            description: "This is soup made with tomatoes"
        },
        {
            id: 2,
            name: "Salad",
            price: "3.00",
            description: "Salad with dressing"
        },
        {
            id: 3,
            name: "Steak",
            price: "6.00",
            description: "Lorem Ipsum"
        },
        {
            id: 4,
            name: "Soup of the day",
            price: "3.50",
            description: "Ask the waiter for more information"
        }
    ])

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
                <Route exact path='/header'>
                    <Header title="Pasta"/>
                </Route>
                <Route exact path='/footer'>
                    <Footer/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
