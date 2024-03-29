import { LOGIN_USER, REGISTER_USER, SET_USER } from "./types";

function userReducer(state = null, action) {
    switch(action.type) {
        case LOGIN_USER:
            state = action.payload;
            return state;
        case REGISTER_USER:
            console.log("In registering user");
            return state;
        case SET_USER:
            console.log("In setting user");
            state = action.payload;
            return state;    
        default:
            return state;
    }
}

export default userReducer;