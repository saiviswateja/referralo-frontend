import React, {useState} from 'react';
import { forgotPassword } from '../api-service/UserService';

function ResetPassword() {
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onChangeEmailHandler = (event) => {
        setEmail(event.target.value);
    }

    const onChangeOtpHandler = (event) => {
        setOtp(event.target.value);
    }

    const onChangeConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value);
    }

    const onChangePasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitPressed = (event) => {
        event.preventDefault();
        
    }

    return (
        <div className='container'>
            <form>
                <h3>Enter your Registered Email Address</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={onChangeEmailHandler}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={onChangePasswordHandler}/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter confirm password" value={confirmPassword} onChange={onChangeConfirmPasswordHandler}/>
                </div>
                <div className="form-group">
                    <label>Otp</label>
                    <input type="test" className="form-control" placeholder="Enter otp" value={otp} onChange={onChangeOtpHandler}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={onSubmitPressed}>Submit</button>
            </form>
        </div>
    );
}

export default ResetPassword;