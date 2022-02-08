import {LOGIN_USER, REGISTER_USER} from './types';

export const loginUser = (loginInformation) => {
    return {
        type: LOGIN_USER,
        payload: loginInformation
    }
}

export const registerUser = (userInformation) => {
    return {
        type: REGISTER_USER,
        payload: userInformation
    }
}