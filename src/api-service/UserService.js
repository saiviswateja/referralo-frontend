import axios from 'axios';

const uninterceptedAxiosInstance = axios.create();

const referraloBaseUrl = process.env.REACT_APP_REFERRALO_URL;

export const login = (loginInformation) => {
    return new Promise((resolve, reject)=>{
        console.log(loginInformation);
        uninterceptedAxiosInstance.post(referraloBaseUrl+"/authenticate", loginInformation)
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
        uninterceptedAxiosInstance.post(referraloBaseUrl+"/api/user", userInformation)
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
        axios.put(referraloBaseUrl+"/api/user/update", userInformation)
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
        axios.get(referraloBaseUrl+"/api/user/userid/"+userId)
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
        uninterceptedAxiosInstance.post(referraloBaseUrl+"/api/otp/forgotpassword", email)
            .then(res=> {
                resolve(res.data);
            }).catch(err=> {
                console.log(err.response);
                alert(err.response.data.message);
                reject({})
            })
    })
}

export const resetPassword = (resetInfoData) => {
    return new Promise((resolve, reject) => {
        console.log(resetInfoData);
        uninterceptedAxiosInstance.post(referraloBaseUrl+"/api/otp/reset", resetInfoData)
            .then(res=> {
                resolve(res.data);
            })
            .catch(err=> {
                console.log(err.response);
                alert(err.response.data.message);
                reject({});
            })
    });
}