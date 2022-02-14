import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import ReferralJob from './components/ReferralJob';
import ViewReferralJob from './components/ViewReferralJob';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <Router>  
      <NavBar/>
      <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/referral/add">
            <ReferralJob/>
          </Route>
          <Route exact path="/referral/view/:referral_id">
            <ViewReferralJob/>
          </Route>
          <Route exact path="/login">
            <LoginScreen/>
          </Route>
          <Route exact path="/signup">
            <SignUpScreen/>
          </Route>
          <Route exact path="/user/edit/:user_id">
            <EditProfile/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
