import axios from 'axios';

export const createReferral = (referralInfomation) => {
    return new Promise((resolve, reject)=>{
        axios.post("http://localhost:8089/api/referral/add", referralInfomation)
        .then((res)=>{
            console.log("tried to save referral");
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

export const getReferrals = () => {
    return new Promise((resolve, reject)=>{
        axios.get("http://localhost:8089/api/referral/list")
        .then((res)=>{
            console.log("tried to get referrals");
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

export const getReferralById = (id) => {
    return new Promise((resolve, reject)=>{
        axios.get("http://localhost:8089/api/referral/"+id)
        .then((res)=>{
            console.log("tried to get referrals");
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

export const getReferralsExceptUserId = (id) => {
    console.log("the id of the current user is " + id);
    return new Promise((resolve, reject)=>{
        axios.get("http://localhost:8089/api/referral/except/"+id)
        .then((res)=>{
            console.log("tried to get referrals except for user id "+id);
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