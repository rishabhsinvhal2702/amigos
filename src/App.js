import Navbar from "./Navbar";
import Signin from "./Signin";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./Homepage";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import SuccessSignIn from "./SuccessSignIn";
import InvalidSignIn from "./InvalidSignIn";
import AccountCreate from "./AccountCreate";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/success">
              <SuccessSignIn />
            </Route>
            <Route exact path='/invalid'>
              <InvalidSignIn />
            </Route>
            <Route exact path='/created'>
              <AccountCreate />
            </Route>
          </Switch>
        </div>
      </div>
    </ Router>
  );
}

export default App;
