import React from 'react';

function UserBox() {
  return <div className='d-flex justify-content-around mt-5' style={{backgroundColor:"red"}}>
    <img className='userimage' src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
    <div className='d-flex flex-column justify-content-around'>
        <div>
            <span>Welcome</span>
            <h1>Viswa Teja</h1> 
        </div>
        <button type="button" class="btn btn-primary">Edit Profile</button>
    </div>       

  </div>;
}

export default UserBox;
