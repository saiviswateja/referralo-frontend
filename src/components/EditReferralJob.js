import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import { getReferralById, updateReferral } from "../api-service/ReferralService";
import { getCompanies } from "../api-service/CompanyService";
import { getSkills } from "../api-service/SkillService";
import { useStateValue } from "../redux/StateProvider";
import { setSkills } from "../redux/Skill/actions";

function EditReferralJob() {
  const [state, dispatch] = useStateValue();
  let { referral_id } = useParams();
  const [referralDetails, setReferralDetails] = useState({});
  const [companyDetails, setCompanyDetails] = useState("");
  const [skillsOfReferral, setSkillsOfReferral] = useState([]);
  const [username, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [companies, setCompanies] = useState([]);
  const [skillDetails, setSkillDetails] = useState([]);

  const [role, setRole] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [description, setDescription] = useState("");
  const [referralCode, setReferralCode] = useState("");


  useEffect(() => {
    async function getReferral() {
      let details = await getReferralById(referral_id);
      setReferralDetails(details);
      setCompanyDetails(details.company);
      setSkillsOfReferral(details.skills);
      setUser(details.user.name);
      setUserEmail(details.user.email);
      setUserId(details.user.id);
      
      setRole(details.role);
      setCompanyId(details.company.id);
      setMin(details.maxExperience);
      setMax(details.minExperience);
      setReferralCode(details.referralCode.split("-")[0]);
      setResponsibilities(details.responsibilities);
      setDescription(details.description);
    }
    async function fetchCompanies() {
      let companies = await getCompanies();
      setCompanies(companies);
    }
    async function fetchSkills() {
      let skillsList = await getSkills();
      setSkillDetails(skillsList);
      dispatch(setSkills(skillsList));
    }
    getReferral();
    fetchCompanies();
    if (state.skills == null) {
      fetchSkills();
    } else if (Object.keys(state.skills).length == 0) {
      fetchSkills();
    }
  }, []);

  const onChangeRoleHandler = (event) => {
    setRole(event.target.value);
  };

  const onChangeCompanyIdHandler = (event) => {
    setCompanyId(event.target.value);
    console.log(companyId);
  };

  const onChangeMinHandler = (event) => {
    setMin(event.target.value);
  };

  const onChangeMaxHandler = (event) => {
    setMax(event.target.value);
  };

  const onChangeResponsibilitiesHandler = (event) => {
    setResponsibilities(event.target.value);
  };

  const onChangeDescriptionHandler = (event) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  };

  const onChangeReferralCodeHandler = (event) => {
    setReferralCode(event.target.value);
  };

  function onSelect(selectedList, selectedItem) {
      setSkillsOfReferral(selectedList);
  }

  function onRemove(selectedList, removedItem) {
    setSkillsOfReferral(selectedList)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let referralInformation = {
      id:referralDetails.id,
      role: role,
      minExperience: min,
      maxExperience: max,
      responsibilities: responsibilities,
      description: description,
      user: {
        id: userId
      },
      company: {
        id: companyId,
      },
      referralCode: referralCode,
      skills: skillsOfReferral
    };
    console.log("before updating referral "+ referralInformation);
    updateReferral(referralInformation)
                .then((res) => {
                  console.log(res);
                  console.log(res.data);
                })
                .catch((err) => {
                  alert("Error updaing referral please try after some time");
                });
  };

  return (
    <div className="container">
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
              value={role || ""}
              onChange={onChangeRoleHandler}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Company
          </label>
          <div className="col-sm-10">
            <select className="form-select" onChange={onChangeCompanyIdHandler}>
            <option selected value={companyDetails.id}>{companyDetails.name}</option>  
            {companies.map((company) => {
                return (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Minimum Experience
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="inputPassword"
              value={min || ""}
              onChange={onChangeMinHandler}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Maximum Experience
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="inputPassword"
              value={max || ""}
              onChange={onChangeMaxHandler}
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
              value={responsibilities || ""}
              onChange={onChangeResponsibilitiesHandler}
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
              value={description || ""}
              onChange={onChangeDescriptionHandler}
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
              value={referralCode || ""}
              onChange={onChangeReferralCodeHandler}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Skills Required
          </label>
          <div className="col-sm-10">
            <Multiselect
              selectedValues={skillsOfReferral}
              options={skillDetails}
              onSelect={onSelect}
              onRemove={onRemove}
              displayValue="name"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="d-flex">
            <button className="btn btn-primary" onClick={onSubmitHandler}>Save Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditReferralJob;
