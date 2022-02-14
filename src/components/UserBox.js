import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


function UserBox(props) {
  const history = useHistory();
  useEffect(()=> {
      if(props.user==null) {
        history.push("/login");
      }
  });
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("came here");
    history.push("/user/edit/" + props.user.id);
  }

  return <div className='d-flex justify-content-around mt-5 userbox_parent'>
    <img className='userimage' src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
    <div className='d-flex flex-column justify-content-around'>
        <div>
            <span>Welcome</span>
            {
                props.user && <h1>{props.user.name}</h1>
            } 
        </div>
        <button type="button" className="btn btn-primary" onClick={onSubmitHandler}><span>Edit Profile</span></button>
    </div>       

  </div>;
}

export default UserBox;
