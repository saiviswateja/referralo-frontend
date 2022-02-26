import React, { useEffect, useState } from 'react';
import {
  useParams
} from "react-router-dom";
import { getReferralById } from '../api-service/ReferralService';
import {getLoggeduser, signOut} from '../helpers/utils';

function ViewReferralJob() {
  let {referral_id} = useParams();
  const [referralDetails, setReferralDetails] = useState({});
  const [companyName, setCompanyName] = useState("");
  const [skills, setSills] = useState("");
  const [username, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(()=> { 
    console.log("calling");
      async function getReferral() {
        let details = await getReferralById(referral_id);
        setReferralDetails(details);
        setCompanyName(details.company.name);
        let skillsDetails = details.skills[0].name;
        for(let i=1;i<skills.length;i++) {
          skillsDetails = skillsDetails + i.name;
        }
        setSills(skillsDetails);
        setUser(details.user.name);
        setUserEmail(details.user.email);
      }
      getLoggeduser().then((user)=> {
        if(user==null) {
          signOut();
          return;
        }
        getReferral();
      });    
  }, []);

  return ( <div className="container">
  <h1 className="display-4 mt-5 mb-5">View Referral</h1>
  <div className="jumbotron">
    <div className="mb-3 row">
      <label for="staticEmail" className="col-sm-2 col-form-label">
        Role
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="inputPassword"
          readOnly
          value={referralDetails.role || ""}
        />
      </div>
    </div>
    <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">
        Company
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="inputPassword"
          readOnly
          value={companyName}
        />
      </div>
    </div>
    <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">
        Minimum Experience
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="inputPassword"
          readOnly
          value={referralDetails.minExperience || ""}
        />
      </div>
    </div>
    <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">
        Maximum Experience
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="inputPassword"
          readOnly
          value={referralDetails.maxExperience || ""}
        />
      </div>
    </div>
    <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">
        Responsibilities
      </label>
      <div className="col-sm-10">
        <textarea
          className="form-control"
          id="inputPassword"
          readOnly
          value={referralDetails.responsibilities || ""}
        />
      </div>
    </div>
    <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">
        Description
      </label>
      <div className="col-sm-10">
        <textarea
          className="form-control"
          id="inputPassword"
          readOnly
          value={referralDetails.description || ""}
        />
      </div>
    </div>
    <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">
        Referral Code
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="inputPassword"
          readOnly
          value={referralDetails.referralCode || ""}
        />
      </div>
    </div>
    <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">
        Skills Required
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="inputPassword"
          readOnly
          value={skills}
        />
      </div>
    </div>
    <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">
        Referral By
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="inputPassword"
          readOnly
          value={skills}
        />
      </div>
    </div>
    <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">
        Skills Required
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="inputPassword"
          readOnly
          value={skills}
        />
      </div>
    </div>
  </div>
</div>);
}

export default ViewReferralJob;
