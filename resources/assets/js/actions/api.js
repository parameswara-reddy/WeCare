import axios from "axios";
export const api = axios.create({
    baseURL: "http://localhost:8000/api",
    timeout: 5000,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});

export const get = url => {
    return api.get(url, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("we_care_token")}`
        }
    });
};
export const post = (url, data) => {
    return api.post(url, data, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("we_care_token")}`
        }
    });
};
export const put = (url, data) => {
    return api.put(url, data, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("we_care_token")}`
        }
    });
};
export const _delete = (url, data) => {
    return api.put(url, data, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("we_care_token")}`
        }
    });
};
