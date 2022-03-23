import axios from 'axios';

export const getSkills = () => {
    return new Promise((resolve, reject)=>{
        axios.get(process.env.REACT_APP_REFERRALO_URL+"/api/skill")
        .then((res)=>{
            console.log("tried to get skills");
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