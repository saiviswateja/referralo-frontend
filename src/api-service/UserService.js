import axios from 'axios';

export const login = (loginInformation) => {
    console.log("in login function");
    axios.post("http://localhost:8089/api/user/login", loginInformation,)
        .then((res)=>{
            console.log("user login")
            console.log(res.data); 
        })
        .catch((err)=>{
            console.log("login failed");
            console.log(err);
        })
}