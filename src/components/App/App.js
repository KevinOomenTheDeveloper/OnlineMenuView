import './App.sass';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";

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
            </Switch>
        </Router>
    </div>
  );
}

export default App;
