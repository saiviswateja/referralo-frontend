import { SET_SKILLS } from "./types";

function skillReducer(state={}, action) {
    switch(action.type) {
        case SET_SKILLS:
            console.log("action.payload");
            console.log(action.payload);
            console.log("before updating state");
            console.log(state);
            state = action.payload;
            console.log("in skills reducer");
            console.log(state);
            return state;
        default:
            return state;
    }
}

export default skillReducer;