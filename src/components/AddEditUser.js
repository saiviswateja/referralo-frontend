import React, { useEffect, useState } from "react";
import { createUser } from "../api-service/UserService";
import { useStateValue } from '../redux/StateProvider';

function AddEditUser() {
  const [state, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentCompany, setCurrentCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
  }

  const onChangePasswordHandler = (event) => {
      setPassword(event.target.value);
  }

  const onChangeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  }

  const onChangeLastNameHandler = (event) => {
      setLastName(event.target.value);
  }

  const onChangecurrentCompanyHandler = (event) => {
    setCurrentCompany(event.target.value);
  }

  const onChangePhoneNumberHandler = (event) => {
      setPhoneNumber(event.target.value);
  }

  const onSubmitHandler = (event) => {
      event.preventDefault();
      createUser({
        
      }).then(res=>{

      })
      .catch(err=> {

      })
  }

  return (
    <div className="container">
    <h1 className="display-4 mt-5 mb-5">Edit User</h1>
      <div className="jumbotron">
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword" value={email} onChange={onChangeEmailHandler}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" value={password} onChange={onChangePasswordHandler}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword" value={firstName} onChange={onChangeFirstNameHandler}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword" value={lastName} onChange={onChangeLastNameHandler}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Current Company
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword" value={currentCompany} onChange={onChangecurrentCompanyHandler}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Phone Number
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword" value={phoneNumber} onChange={onChangePhoneNumberHandler}/>
          </div>
        </div>
        <div className="row mt-5">
            <div className="d-flex">
            <button className="btn btn-primary">Save Details</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AddEditUser;
