import React, {useState, useEffect} from "react";
import UserBox from "./UserBox";
import FilterBox from "./FilterBox";
import ReferralsCountBox from "./ReferralsCountBox";
import { useStateValue } from "../redux/StateProvider";
import { getUserById } from "../api-service/UserService";

function HomeScreen(props) {
 
  return (
    <div className="contianer">
      <div className="row homerow">
        <div className="col homebox h-100 userbox"><UserBox user={props.user}/></div>
        <div className="col homebox h-100 filterbox"><FilterBox/></div>
        <div className="col homebox h-100 referralCountBox"><ReferralsCountBox handleToggle={props.handleToggle} showUserReferrals={props.showUserReferrals}/></div>
      </div>
    </div>
  );
}

export default HomeScreen;
