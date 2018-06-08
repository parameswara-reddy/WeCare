import * as api from "./api";
export const LOGIN = "LOGIN";
export const AUTH_ME = "AUTH_ME";
export const login = () => ({
    type: LOGIN,
    payload: api.post("auth/login",{mobile_number:"+17039353757", password: "4005"})
});

export const getLoggedInUser = () => ({
    type: AUTH_ME,
    payload: api.post("auth/me")
});
