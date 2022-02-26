import { Cookies } from 'react-cookie';
const cookie = new Cookies();
export const signOut = () => {
    return new Promise((resolve, reject)=>{
        cookie.remove("token");
        cookie.remove("loggedUser");
        window.location = '/login';
    });
}

export const getLoggeduser = () => {
    return new Promise((resolve, reject) => {
        let user = cookie.get("loggedUser");
        if(user!=null) {
            resolve(user);
        } else {
            resolve(null);
        }
    })
}