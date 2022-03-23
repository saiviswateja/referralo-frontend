import axios from 'axios';

const referraloBaseUrl = process.env.REACT_APP_REFERRALO_URL;

export const createReferral = (referralInfomation) => {
    return new Promise((resolve, reject)=>{
        axios.post(referraloBaseUrl+"/api/referral/add", referralInfomation)
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

export const updateReferral = (referralInfomation) => {
    return new Promise((resolve, reject)=>{
        axios.put(referraloBaseUrl+"/api/referral/update", referralInfomation)
        .then((res)=>{
            console.log("tried to update referral");
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
        axios.get(referraloBaseUrl+"/api/referral/list")
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
        axios.get(referraloBaseUrl+"/api/referral/"+id)
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

export const getReferralByIdForEdit = (referralId, userId) => {
    return new Promise((resolve, reject)=>{
        axios.get(referraloBaseUrl+"/api/referral/edit/"+referralId+"/"+userId)
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

export const getReferralsByUserId = (id) => {
    return new Promise((resolve, reject)=>{
        console.log(id);
        axios.get(referraloBaseUrl+"/api/referral/user/"+id)
        .then((res)=>{
            console.log("tried to get referrals by user id");
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
    return new Promise((resolve, reject)=>{
        axios.get(referraloBaseUrl+"/api/referral/except/"+id)
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