import axios from 'axios';

export const getCompanies = () => {
    return new Promise((resolve, reject)=>{
        axios.get("http://localhost:8089/api/company")
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