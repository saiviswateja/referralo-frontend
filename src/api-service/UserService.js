import axios from 'axios';

const uninterceptedAxiosInstance = axios.create();

export const login = (loginInformation) => {
    return new Promise((resolve, reject)=>{
        console.log(loginInformation);
        uninterceptedAxiosInstance.post("http://localhost:8089/authenticate", loginInformation)
        .then((res)=>{
            console.log("tried to authenticate");
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
        uninterceptedAxiosInstance.post("http://localhost:8089/api/user", userInformation)
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

export const updateUser = (userInformation) => {
    return new Promise((resolve, reject)=>{
        axios.put("http://localhost:8089/api/user/update", userInformation)
        .then((res)=>{
            console.log("tried to update user");
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

export const forgotPassword = (email) => {
    return new Promise((resolve, reject) => {
        console.log(email);
        uninterceptedAxiosInstance.post("http://localhost:8089/api/otp/forgotpassword", email)
            .then(res=> {
                resolve(res.data);
            }).catch(err=> {
                console.log(err.response);
                alert(err.response.data.message);
                reject({})
            })
    })
}