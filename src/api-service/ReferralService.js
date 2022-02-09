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