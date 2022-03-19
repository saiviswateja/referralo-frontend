import React, {useState} from 'react';
import { forgotPassword } from '../api-service/UserService';

function ForgotPassword() {
    const [email, setEmail] = useState(""); 

    const onChangeEmailHandler = (event) => {
        setEmail(event.target.value);
    }

    const onSubmitPressed = (event) => {
        event.preventDefault();
        forgotPassword(
            {
                "email":email
            }
        ).then(resposne => {
            alert("please check your email for further steps");
            window.location = "/login"
        })
    }

    return (
        <div className='container'>
            <form>
                <h3>Enter your Registered Email Address</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={onChangeEmailHandler}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={onSubmitPressed}>Submit</button>
            </form>
        </div>
    );
}

export default ForgotPassword;