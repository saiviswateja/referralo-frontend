import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  createUser,
  getUserById,
  updateUser,
} from "../api-service/UserService";
import { useStateValue } from "../redux/StateProvider";
import { useParams } from "react-router-dom";
import { getCompanies } from "../api-service/CompanyService";
import {setUser} from '../redux/User/actions';
import {getLoggeduser, signOut} from '../helpers/utils';

function EditProfile() {
  let { user_id } = useParams();
  const [state, dispatch] = useStateValue();
  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [changedCompany, setChangedCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companies, setCompanies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getReferral() {
      let userDetails = await getUserById(user_id);
      setUserData(userDetails);
      setEmail(userDetails.email);
      setName(userDetails.name);
      setCompany(userDetails.workingCompany);
      setChangedCompanyName(userDetails.workingCompany);
      setPhoneNumber(userDetails.phoneNumber);
    }
    async function fetchCompanies() {
      let companies = await getCompanies();
      setCompanies(companies);
    }
    getLoggeduser().then((user)=> {
      if(user==null) {
        signOut();
        return;
      }
      getReferral();
    });
    fetchCompanies();
    console.log(company);
  }, []);

  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };

  const onChangePhoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const onChangeCompanyNameHandler = (event) => {
    setChangedCompanyName(event.target.value);
  };

  const onSubmitHandler = (event) => {
    let userInformation = {
      id: user_id,
      email: email,
      name: name,
      workingCompany: changedCompany,
      phoneNumber: phoneNumber,
    };
    console.log(userInformation);
    updateUser(userInformation)
      .then((res) => {
        console.log("user data pdated");
        dispatch(setUser(userInformation));
        history.push("/home");
      })
      .catch((err) => {
        console.log("error occureed");
        console.log(err.data);
      });
  };

  return (
    <div className="container">
      <h1 className="display-4 mt-5 mb-5">Edit your details</h1>
      <div className="jumbotron">
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputPassword"
              value={email}
              onChange={onChangeEmailHandler}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputPassword"
              value={name}
              onChange={onChangeNameHandler}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Current Company
          </label>
          <div className="col-sm-10">
            <select
              className="form-select"
              onChange={onChangeCompanyNameHandler}
            >
              <option selected value={company}>
                {company}
              </option>
              {companies.map((company) => {
                return (
                  <option key={company.id} value={company.name}>
                    {company.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Phone Number
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputPassword"
              value={phoneNumber}
              onChange={onChangePhoneNumberHandler}
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

export default EditProfile;
