import { combineReducers } from "redux";
import auth from "./auth";
import clinics from "./clinics";
import users from "./users";
import user from "./user";

const rootReducer = combineReducers({
    auth,
    clinics,
    users,
    user
});

export default rootReducer;
