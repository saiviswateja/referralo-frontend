import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import AddEditUser from './components/AddEditUser';
import ReferralJob from './components/ReferralJob';
import ViewReferralJob from './components/ViewReferralJob';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';

function App() {
  return (
    <Router>  
      <NavBar/>
      <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/user">
            <AddEditUser/>
          </Route>
          <Route exact path="/referral/add">
            <ReferralJob/>
          </Route>
          <Route exact path="/referral/view">
            <ViewReferralJob/>
          </Route>
          <Route exact path="/login">
            <LoginScreen/>
          </Route>
          <Route exact path="/signup">
            <SignUpScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
