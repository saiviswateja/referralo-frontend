import React, { useEffect, useState } from "react";
import { createUser } from "../api-service/UserService";
import { useStateValue } from '../redux/StateProvider';
import { useHistory } from "react-router-dom";
import { getCompanies } from "../api-service/CompanyService";
import { setCompanies } from "../redux/Company/actions";

function SignUpScreen() {
    const [state, dispatch] = useStateValue();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [workingCompany, setWorkingCompany] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [companiesList, setCompaniesList] = useState([]);
    let history = useHistory();

    useEffect(()=>{
        async function fetchCompanies () {
            let companiesList = await getCompanies();
            console.log(companiesList);
            dispatch(setCompanies(companiesList));
            setCompaniesList(companiesList);
            console.log(state);
        }
        //https://codepen.io/mansour/pen/JorKOx for input box along with input box
        fetchCompanies();
    }, []);

    const onChangeEmailHandler = (event) => {
        setEmail(event.target.value);
    }

    const onChangePasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    const onChangeConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
    }

    const onChangeNameHandler = (event) => {
        setName(event.target.value);
    }

    const onChangeWorkingCompanyHandler = (event) => {
        console.log(event.target.value);
        setWorkingCompany(event.target.value);
    }

    const onChangePhoneNumberHandler = (event) => {
        setPhoneNumber(event.target.value);
    }
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("It came here");
        createUser({
            email,
            name,
            password,
            workingCompany,
            phoneNumber
        }).then(res=>{
            console.log(res);
            console.log(res.data);
            history.push("/login");  
        })
        .catch(err=> {
            alert("Error creating user please try after some time");
        })
    }
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
                value={name} onChange={onChangeNameHandler}
            />
            </div>
            <div className="form-group">
            <label>Company</label>
            <select className="form-select" onChange={onChangeWorkingCompanyHandler}>
                <option selected>Open this select menu</option>
                {
                    companiesList.map((company) => {
                        return  <option key={company.id} value={company.name}>{company.name}</option>
                    })
                }
            </select>
            </div>
            <div className="form-group">
            <label>Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email} onChange={onChangeEmailHandler}
            />
            </div>
            <div className="form-group">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password} onChange={onChangePasswordHandler}
            />
            </div>
            <div className="form-group">
            <label>Confirm Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={confirmPassword} onChange={onChangeConfirmPasswordHandler}
            />
            </div>
            <div className="form-group">
            <label>Mobile Number</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter mobile number"
                value={phoneNumber} onChange={onChangePhoneNumberHandler}
            />
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={onSubmitHandler}>
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
