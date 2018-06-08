import * as api from "./api";

export const FETCH_CLINICS = 'FETCH_CLINICS';
export const fetchClinics = () => ({
    type: FETCH_CLINICS,
    payload: api.get("clinics")
})