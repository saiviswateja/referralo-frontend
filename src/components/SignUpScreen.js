import React, { useEffect } from "react";
import { useStateValue } from '../redux/StateProvider';
import { loginUser } from "../redux/User/actions";

function SignUpScreen() {
    const [{},dispatch] = useStateValue();
    useEffect(()=>{
        console.log("it started");
        dispatch(loginUser("test"));
    });
    return (
        <div className="container">
        <form>
            <h3>Sign Up</h3>
            <div className="form-group">
            <label>Name</label>
            <input
                type="text"
                className="form-control"
                placeholder="First name"
            />
            </div>
            <div className="form-group">
            <label>Company</label>
            <input type="text" className="form-control" placeholder="Company" />
            </div>
            <div className="form-group">
            <label>Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter email"
            />
            </div>
            <div className="form-group">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
            />
            </div>
            <div className="form-group">
            <label>Confirm Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
            />
            </div>
            <div className="form-group">
            <label>Mobile Number</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter mobile number"
            />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
            Sign Up
            </button>
            <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
            </p>
        </form>
        </div>
    );
}

export default SignUpScreen;
