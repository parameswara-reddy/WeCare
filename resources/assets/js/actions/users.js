import * as api from "./api";

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
    type: FETCH_USERS,
    payload: api.get("users")
})