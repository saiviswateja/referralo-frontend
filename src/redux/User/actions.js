import {LOGIN_USER, REGISTER_USER, SET_USER} from './types';

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

export const setUser = (userInformation) => {
    return {
        type: SET_USER,
        payload: userInformation
    }
}