import React, { useEffect, useState } from 'react';
import { login } from '../api-service/UserService';
import {loginUser} from './../redux/User/actions';
import { useStateValue } from '../redux/StateProvider';
import { useHistory } from "react-router-dom";

function LoginScreen() {
    const [state, dispatch] = useStateValue();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    useEffect(()=> {
        console.log("in login screen for use effect");
    });

    const onChangeUsernameHandler = (event) => {
        console.log("entered on onchange handler");
        setUsername(event.target.value);
    }

    const onChangePasswordHandler = (event) => {
        console.log("entered on onchange handler");
        setPassword(event.target.value);
    }

    const submitPressed = async (event) => {
        event.preventDefault();
        let loggedUserDetails = await login({
            "username":username,
            "password":password
        });
        console.log(loggedUserDetails);
        dispatch(loginUser(loggedUserDetails));     
        if(Object.keys(loggedUserDetails).length!=0) {
            history.push("/home");
        } else {
            console.log("tried to login but didn't worked");
        }
    }   
    return <div className='container'>
                <form>
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" value={username} onChange={onChangeUsernameHandler}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={onChangePasswordHandler}/>
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={submitPressed}>Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form></div>;
}

export default LoginScreen;
