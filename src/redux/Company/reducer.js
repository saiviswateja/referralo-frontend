import { SET_COMPANIES } from "./types";

function companyReducer(state={}, action) {
    switch(action.type) {
        case SET_COMPANIES:
            state = action.payload;
            console.log("in reducer");
            console.log(state);
            return state;
        default:
            return state;
    }
}

export default companyReducer;