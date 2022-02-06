import React from "react";

function ReferralScreen() {
  return (
    <div className="container referral-container">
      <div className="row">
        <div className="card referral-card">
          <div class="card-body">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between">
                <h5 class="card-title">Java Full Stack Developer</h5>
                <h5>Referral by</h5>
                <p class="card-text">Company Name: Infosys</p>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span>Experience </span>
                  <strong>5 - 10</strong>
                  <strong></strong>
                </div>
                <h4>Sree Rama Sai viswa Teja</h4>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferralScreen;
