import { Cookies } from 'react-cookie';
const cookie = new Cookies();
export const signOut = () => {
    return new Promise((resolve, reject)=>{
        cookie.remove("token");
        cookie.remove("loggedUser");
        window.location = '/login';
    });
}