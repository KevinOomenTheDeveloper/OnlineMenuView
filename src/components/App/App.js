import './App.sass';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Example from "../Example/Example";
import Header from "../Header/Header";
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
                    <Home/>
                </Route>
                <Route exact path='/header'>
                    <Header title="Pasta"/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
