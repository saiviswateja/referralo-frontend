import React, { useEffect, useState } from "react";
import { createUser, getUserById } from "../api-service/UserService";
import { useStateValue } from "../redux/StateProvider";
import { useParams } from "react-router-dom";

function EditProfile() {
  let { user_id } = useParams();
  const [state, dispatch] = useStateValue();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getReferral() {
      let userDetails = await getUserById(user_id);
      setUser(userDetails);
      console.log(userDetails);
    }
    getReferral();
  }, []);

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
              value={user.email}
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
              value={user.name}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Current Company
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputPassword"
              value={user.workingCompany || ""}
            />
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
              value={user.phoneNumber || ""}
            />
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

export default EditProfile;
