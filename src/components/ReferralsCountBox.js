import React from "react";

function ReferralsCountBox() {
  return (
    <div className="referralbox">
      <div className="h-50" style={{ backgroundColor: "red" }}>
        <div>
          <span>Referralo's given 10</span>
        </div>
      </div>
      <div className="h-50" style={{ backgroundColor: "white" }}>
        <div>
          <span>Shown interest in 20 Referrelo's</span>
        </div>
      </div>
    </div>
  );
}

export default ReferralsCountBox;
