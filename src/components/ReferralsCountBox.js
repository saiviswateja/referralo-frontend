import React from "react";
import ToggleButton from 'react-toggle-button';
import Switch from "react-switch";

function ReferralsCountBox(props) {
  return (
    <div className="referralbox referral_count_box">
      <div className="h-50">
      <div className="d-flex flex-column">
        <div className="p-2">
            <span className="referral_count_box_text">
                Number of Referrals Given
            </span>
        </div>
        <div className="p-2">10</div>
        <div className="p-2 d-flex flex-column">
          <span className="referral_count_box_text">Show My Referrals</span>
          <Switch onChange={props.handleToggle} checked={props.showUserReferrals} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default ReferralsCountBox;
