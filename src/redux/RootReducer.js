import {combineReducers} from 'redux';
import companyReducer from './Company/reducer';
import skillReducer from './Skill/reducer';
import userReducer from './User/reducer';

export default combineReducers({
    users: userReducer,
    companies: companyReducer,
    skills: skillReducer
});

