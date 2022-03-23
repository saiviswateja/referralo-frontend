import axios from 'axios';

const uninterceptedAxiosInstance = axios.create();

export const getCompanies = () => {
    return new Promise((resolve, reject)=>{
        uninterceptedAxiosInstance.get(process.env.REACT_APP_REFERRALO_URL+"/api/company")
        .then((res)=>{
            console.log("tried to get companies");
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