import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="container">
          <div className="inner cover pt-5">
            <h1 className="cover-heading">Referralo</h1>
            <p className="lead">
              Ever worried about how to get Referrals from other companies? Also
              worried about missing referral chances in other companies? No Need
              to worry at all!! Because Referralo is here which helps you to
              know about referral in other companies
            </p>
            <p className="lead">
              <h3>Is that the only use of this site?</h3>
            </p>
            <p className="lead">If you think so, you are wrong</p>
            <p className="lead">
              You have some referral oppurtunities in your company and want some
              skilled professional to join your company, you could use this site
            </p>
            <p className="d-flex justify-content-around">
              <Link to={`/signup`}>
                <button className="btn btn-primary btn-lg">Sign Up</button>
              </Link>
              <Link to={`/login`}>
                <button className="btn btn-info btn-lg">Login</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
