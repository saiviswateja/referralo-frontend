import React, { useEffect, useState } from 'react';
import {
  useParams
} from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import { getReferralById } from '../api-service/ReferralService';

function EditReferralJob() {
  let {referral_id} = useParams();
  const [referralDetails, setReferralDetails] = useState({});
  const [companyName, setCompanyName] = useState("");
  const [skills, setSkills] = useState([]);
  const [username, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  useEffect(()=> {
    console.log("calling");
      async function getReferral() {
        let details = await getReferralById(referral_id);
        setReferralDetails(details);
        setCompanyName(details.company.name);
        let skillsDetails = [];
        for(let i=0;i<skills.length;i++) {
          skillsDetails.push(skills[i].name);
        }
        setSkills(skillsDetails);
        setUser(details.user.name);
        setUserEmail(details.user.email);
        console.log(skills);
      }
      getReferral();
  }, []);

  function onSelect(selectedList, selectedItem) {
    // console.log(se);
    // selectedSkills.push(selectedItem.id);
    // setSelectedSkills(selectedSkills);
  }

  function onRemove(selectedList, removedItem) {
    // console.log(selectedSkills);
    // let updatedSkills = selectedSkills.filter((id) => {
    //   return id != removedItem.id;
    // });
    // setSelectedSkills(updatedSkills);
  }

  return ( <div className="container">
  <h1 className="display-4 mt-5 mb-5">Edit Referral</h1>
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
          value={referralDetails.referralCode || ""}
        />
      </div>
    </div>
    <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">
        Skills Required
      </label>
      <div className="col-sm-10">
        <Multiselect
            selectedValues={skills}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            />
      </div>
    </div>
    <div className="row mt-5">
          <div className="d-flex">
            <button className="btn btn-primary">
              Save Details
            </button>
          </div>
        </div>
  </div>
</div>);
}

export default EditReferralJob;
