import './App.sass';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Example from "../Example/Example";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Layout from "../Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";


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
