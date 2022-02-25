import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Cookies } from "react-cookie";
import { useStateValue } from '../redux/StateProvider';
import {signOut} from '../helpers/utils';

function NavBar() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [state, dispatch] = useStateValue();

  useEffect(()=> {

  }, [state.users])

  useEffect(() => {
    let cookie = new Cookies();
    let accessToken = cookie.get("token");
    let loggedUser = cookie.get("loggedUser");
    if (accessToken != null || loggedUser != null) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Referralo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {isLoggedIn && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/referral/add">
                  Add
                </Link>
              </li>
            </ul>
          )}

          {isLoggedIn ? (
            <form className="d-flex">
              <Link className="nav-link active" onClick={()=> {
                signOut();
              }}>Sign Out</Link>
            </form>
          ) : (
            <form className="d-flex">
              <Link className="nav-link active" to="/login">
                Login
              </Link>
              <Link className="nav-link active" to="/signup">
                Sign Up
              </Link>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
