import {FETCH_USERS} from "../actions/users";
const initialState = {
    loadingUsers: false,
    users: [],
    usersLoadingError: ""
};
const users = (state = initialState, action) => {
    switch(action.type) {
        case `${FETCH_USERS}`:
            return { ...state, loadingUsers: true };
        case `${FETCH_USERS}_FULFILLED`:
            return { ...state, loadingUsers: false, users: action.payload.data };
        case `${FETCH_USERS}_FAILED`:
            return { ...state, loadingUsers: false, usersLoadingError: action.payload };
        default:
            return state;
    }
}

export default users;