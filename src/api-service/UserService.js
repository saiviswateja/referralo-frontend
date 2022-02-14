import axios from 'axios';

export const login = (loginInformation) => {
    return new Promise((resolve, reject)=>{
        axios.post("http://localhost:8089/api/user/login", loginInformation)
        .then((res)=>{
            console.log("tried to get login");
            console.log(res.data);
            resolve(res.data);
        })
        .catch((err)=>{
            console.log(err.response);
            alert(err.response.data.message);
            reject({})
        });
    });
}

export const createUser = (userInformation) => {
    return new Promise((resolve, reject)=>{
        axios.post("http://localhost:8089/api/user", userInformation)
        .then((res)=>{
            console.log("tried to save user");
            console.log(res.data);
            resolve(res.data);
        })
        .catch((err)=>{
            console.log(err.response);
            alert(err.response.data.message);
            reject({})
        });
    });
}

export const getUserById = (userId) => {
    return new Promise((resolve, reject)=>{
        console.log(userId);
        axios.get("http://localhost:8089/api/user/userid/"+userId)
        .then((res)=>{
            console.log("tried to get user");
            console.log(res.data);
            resolve(res.data);
        })
        .catch((err)=>{
            console.log(err.response);
            alert(err.response.data.message);
            reject({})
        });
    });
}