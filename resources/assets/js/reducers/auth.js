import { LOGIN, AUTH_ME } from "../actions/auth";
const initialState = {
    loggedIn: false,
    loginLoading: false,
    loadingUser: false,
    user: null
};
const auth = (state = initialState, action) => {
    switch (action.type) {
        case `${LOGIN}_LOADING`:
            return { ...state, loginLoading: true };
        case `${LOGIN}_FULFILLED`:
            sessionStorage.setItem(
                "we_care_token",
                action.payload.data.access_token
            );
            return { ...state, loginLoading: false, loggedIn: true };
        case `${LOGIN}_FAILED`:
            return { ...state, loginLoading: false, error: action.payload };

        case `${AUTH_ME}_LOADING`:
            return { ...state, loadingUser: true };
        case `${AUTH_ME}_FULFILLED`:
            return { ...state, loadingUser: false, user: action.payload.data };
        case `${AUTH_ME}_FAILED`:
            return { ...state, loadingUser: false, error: action.payload };
        default:
            return state;
    }
};
export default auth;
