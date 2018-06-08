import {GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER} from "../actions/user";
const initialState = {
    user: {},
    getUserLoading: false,
    getUserError: "",
    createUserLoading: false,
    createUserError: "",
    updateUserLoading: false,
    updateUserError: "",
    deleteUserLoading: false,
    deleteUserError: ""
};
const users = (state = initialState, action) => {
    switch(action.type) {
        case `${GET_USER}`:
            return { ...state, getUserLoading: true, user: {} };
        case `${GET_USER}_FULFILLED`:
            return { ...state, getUserLoading: false, user: action.payload.data };
        case `${GET_USER}_FAILED`:
            return { ...state, getUserLoading: false, getUserError: action.payload.data };
            
        case `${CREATE_USER}`:
            return { ...state, createUserLoading: true };
        case `${CREATE_USER}_FULFILLED`:
            return { ...state, createUserLoading: false, user: action.payload.data };
        case `${CREATE_USER}_FAILED`:
            return { ...state, createUserLoading: false, createUserError: action.payload.data };
            
        case `${UPDATE_USER}`:
            return { ...state, updateUserLoading: true };
        case `${UPDATE_USER}_FULFILLED`:
            return { ...state, updateUserLoading: false, user: action.payload.data };
        case `${UPDATE_USER}_FAILED`:
            return { ...state, updateUserLoading: false, updateUserError: action.payload.data };
            
        case `${DELETE_USER}`:
            return { ...state, deleteUserLoading: true };
        case `${DELETE_USER}_FULFILLED`:
            return { ...state, deleteUserLoading: false, user: action.payload.data };
        case `${DELETE_USER}_FAILED`:
            return { ...state, deleteUserLoading: false, deleteUserError: action.payload.data };

        default:
            return state;
    }
}

export default users;