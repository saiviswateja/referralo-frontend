import React, { useEffect, useState } from "react";
import { getReferralsExceptUserId } from "../api-service/ReferralService";
import {Link} from 'react-router-dom';
import { useStateValue } from "../redux/StateProvider";

function ReferralScreen(props) {
  const [state, dispatch] = useStateValue();
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };
  
  const [referrals, setReferrals] = useState([]);
  useEffect(()=> {
    console.log("came here in referral screen");
    console.log(props);
      async function fetchReferrals (id) {
          let retrunedReferrals = await getReferralsExceptUserId(id);
          setReferrals(retrunedReferrals);
      } 
      props && props.user && props.user.id && fetchReferrals(props.user.id);
  }, []);

  return (
    <div className="container referral-container">
      <div className="row">
        {
          referrals.map(referral => {
            return <div className="card referral-card" key={referral.id}>
            <div className="card-body">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title">{referral.role}</h4>
                  <h5>Referral by</h5>
                  <h4 className="card-text">{referral.company.name}</h4>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>Experience </h5>
                    <h4>{referral.minExperience} - {referral.maxExperience}</h4>
                  </div>
                  <h4>{referral.user.name}</h4>
                  <Link to={`/referral/view/${referral.id}`}  style={linkStyle}>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                        <span>View Details</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div> 
          })
        }
      </div>
    </div>
  );
}

export default ReferralScreen;
