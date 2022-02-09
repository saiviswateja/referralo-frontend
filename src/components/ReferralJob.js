import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {createReferral} from '../api-service/ReferralService';
import { getSkills } from "../api-service/SkillService";
import { setCompanies } from "../redux/Company/actions";
import { setSkills } from "../redux/Skill/actions";
import { useStateValue } from '../redux/StateProvider';

function ReferralJob() {
  const [state, dispatch] = useStateValue();
  const history = useHistory();
  const [role, setRole] = useState("");
  const [company, setCompany] = useState(""); 
  const [min, setMin] = useState(""); 
  const [max, setMax] = useState(""); 
  const [responsibilities, setResponsibilities] = useState(""); 
  const [description, setDescription] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [skillsList, setSkillsList] = useState([]);

  useEffect(()=>{
    async function fetchCompanies () {
        let skillsList = await getSkills();
        console.log(skillsList);
        setSkillsList(skillsList);
        dispatch(setSkills(skillsList));
        console.log(state);
    }
    fetchCompanies();
  }, []);


  const onChangeRoleHandler = (event) => {
    setRole(event.target.value);
  }

  const onChangeCompanyHandler = (event) => {
    setCompany(event.target.value);
  }

  const onChangeMinHandler = (event) => {
    setMin(event.target.value);
  }

  const onChangeMaxHandler = (event) => {
    setMax(event.target.value);
  }

  const onChangeResponsibilitiesHandler = (event) => {
    setResponsibilities(event.target.value);
  }

  const onChangeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  }

  const onChangeReferralCodeHandler = (event) => {
    setReferralCode(event.target.value);
  }

  const onChangeSkillsHandler = (event) => {
    // setSkillsList(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("It came here");
    let user = state.users;
    console.log(user);
    // createReferral({
        
    // }).then(res=>{
    //     console.log(res);
    //     console.log(res.data); 
    // })
    // .catch(err=> {
    //     alert("Error creating user please try after some time");
    // })
  }

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
            <input
              type="text"
              className="form-control"
              id="inputPassword"
              value={company}
              onChange={onChangeCompanyHandler}
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
            <select className="form-select" onChange={onChangeSkillsHandler}>
                <option selected>Open this select menu</option>
                {
                    skillsList.map((skill) => {
                        return  <option key={skill.id} value={skill.name}>{skill.name}</option>
                    })
                }
            </select>
          </div>
        </div>
        <div className="row mt-5">
          <div className="d-flex">
            <button className="btn btn-primary" onClick={onSubmitHandler}>Save Details</button>
          </div>
        </div>
        <button className="btn btn-primary" onClick={()=>{
          history.push("/home");
        }}>Save Details</button>

      </div>
    </div>
  );
}

export default ReferralJob;
