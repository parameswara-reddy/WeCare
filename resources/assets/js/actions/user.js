import * as api from "./api";

export const CREATE_USER = "CREATE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const GET_USER = "GET_USER";

export const createUser = data => ({
    type: CREATE_USER,
    payload: api.post("users")
});
export const updateUser = data => ({
    type: UPDATE_USER,
    payload: api.put("users/" + data.id)
});
export const deleteUser = data => ({
    type: DELETE_USER,
    payload: api._delete("users/" + data.id)
});
export const getUser = id => ({
    type: GET_USER,
    payload: api.get("users/" + id)
});
