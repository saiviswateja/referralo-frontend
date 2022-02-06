import React from 'react';

function ViewReferralJob() {
  return ( <div className="container">
  <h1 class="display-4 mt-5 mb-5">View Referral</h1>
  <div className="jumbotron">
    <div class="mb-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label">
        Role
      </label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="inputPassword"
          readOnly
          value="Softwware Engineer"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">
        Company
      </label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="inputPassword"
          readOnly
          value="Valuelabs"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">
        Minimum Experience
      </label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="inputPassword"
          readOnly
          value="2"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">
        Maximum Experience
      </label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="inputPassword"
          readOnly
          value="5"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">
        Responsibilities
      </label>
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="inputPassword"
          readOnly
          value="2"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">
        Description
      </label>
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="inputPassword"
          readOnly
          value="2"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">
        Referral Code
      </label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="inputPassword"
          readOnly
          value="ABC126765"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">
        Skills Required
      </label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="inputPassword"
          readOnly
          value="ABC126765"
        />
      </div>
    </div>
    <div className="row mt-5">
      <div className="d-flex">
        <button className="btn btn-primary">Save Details</button>
      </div>
    </div>
  </div>
</div>);
}

export default ViewReferralJob;
