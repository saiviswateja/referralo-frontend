import React from "react";
import UserBox from "./UserBox";
import FilterBox from "./FilterBox";
import ReferralsCountBox from "./ReferralsCountBox";

function HomeScreen() {
  return (
    <div className="contianer">
      <div className="row homerow">
        <div className="col homebox h-100" style={{backgroundColor:"red"}}><UserBox/></div>
        <div className="col homebox h-100"  style={{backgroundColor:"purple"}}><FilterBox/></div>
        <div className="col homebox h-100" style={{backgroundColor:"orange"}}><ReferralsCountBox/></div>
      </div>
    </div>
  );
}

export default HomeScreen;
