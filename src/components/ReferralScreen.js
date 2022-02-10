import React, { useEffect, useState } from "react";
import { getReferrals } from "../api-service/ReferralService";

function ReferralScreen() {
  const [referrals, setReferrals] = useState([]);
  useEffect(()=> {
      async function fetchReferrals () {
          let retrunedReferrals = await getReferrals();
          setReferrals(retrunedReferrals);
      } 
      fetchReferrals();
  }, [])
  return (
    <div className="container referral-container">
      <div className="row">
        {
          referrals.map(referral => {
            return <div className="card referral-card" key={referral.id}>
            <div className="card-body">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{referral.role}</h5>
                  <h5>Referral by</h5>
                  <p className="card-text">Company Name: {referral.company.name}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <span>Experience </span>
                    <strong>{referral.minExperience} - {referral.maxExperience}</strong>
                    <strong></strong>
                  </div>
                  <h4></h4>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    View Details
                  </button>
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
