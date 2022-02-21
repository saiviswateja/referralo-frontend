import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createReferral } from "../api-service/ReferralService";
import { getSkills } from "../api-service/SkillService";
import { setCompanies } from "../redux/Company/actions";
import { setSkills } from "../redux/Skill/actions";
import { useStateValue } from "../redux/StateProvider";
import Multiselect from "multiselect-react-dropdown";
import { getCompanies } from "../api-service/CompanyService";

function ReferralJob() {
  const [state, dispatch] = useStateValue();
  const history = useHistory();
  const [role, setRole] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [description, setDescription] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [skillsList, setSkillsList] = useState([]);
  const [companiesList, setCompaniesList] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      let skillsList = await getSkills();
      console.log(state);
      setSkillsList(skillsList);
      dispatch(setSkills(skillsList));
    }
    async function fetchCompanies() {
      let companiesList = await getCompanies();
      setCompaniesList(companiesList);
      dispatch(setCompanies(companiesList));
    }
    if (state.skills == null) {
      fetchSkills();
    } else if (Object.keys(state.skills).length == 0) {
      fetchSkills();
    }
    if (state.companies == null) {
      fetchCompanies();
    } else if (Object.keys(state.companies).length == 0) {
      fetchCompanies();
    }
  }, []);

  const onChangeRoleHandler = (event) => {
    setRole(event.target.value);
  };

  const onChangeCompanyIdHandler = (event) => {
    setCompanyId(event.target.value);
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
    console.log(selectedSkills);
    selectedSkills.push(selectedItem.id);
    setSelectedSkills(selectedSkills);
  }

  function onRemove(selectedList, removedItem) {
    console.log(selectedSkills);
    let updatedSkills = selectedSkills.filter((id) => {
      return id != removedItem.id;
    });
    setSelectedSkills(updatedSkills);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("It came here");
    let user = state.users;
    console.log(user);
    let skills = [];
    skills = selectedSkills.map((id) => ({
      id: id,
    }));
    let referralInformation = {
      role: role,
      minExperience: min,
      maxExperience: max,
      responsibilities: responsibilities,
      description: description,
      company: {
        id: companyId,
      },
      user: {
        id: user.id
      },
      referralCode: referralCode,
      skills: skills,
    };
    console.log(referralInformation);
    createReferral(referralInformation)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        alert("Error creating referral please try after some time");
      });
  };

  return (
    <div className="container">
      <h1 className="display-4 mt-5 mb-5">Add Referral</h1>
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
              value={role}
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
              <option selected>Open this select menu</option>
              {companiesList.map((company) => {
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
              type="text"
              className="form-control"
              id="inputPassword"
              value={min}
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
              type="text"
              className="form-control"
              id="inputPassword"
              value={max}
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
              value={responsibilities}
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
              value={description}
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
              value={referralCode}
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
              options={skillsList}
              onSelect={onSelect}
              onRemove={onRemove}
              displayValue="name"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="d-flex">
            <button className="btn btn-primary" onClick={onSubmitHandler}>
              Save Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferralJob;
