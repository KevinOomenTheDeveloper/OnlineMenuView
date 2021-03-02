import './App.sass';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path='/'>
                    Hello World
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
