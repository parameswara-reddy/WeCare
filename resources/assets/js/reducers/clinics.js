import {FETCH_CLINICS} from "../actions/clinics";
const initialState = {
    loadingClinics: false,
    clinics: [],
    clinicsLoadingError: ""
};
const clinics = (state = initialState, action) => {
    switch(action.type) {
        case `${FETCH_CLINICS}`:
            return { ...state, loadingClinics: true };
        case `${FETCH_CLINICS}_FULFILLED`:
            return { ...state, loadingClinics: false, clinics: action.payload.data };
        case `${FETCH_CLINICS}_FAILED`:
            return { ...state, loadingClinics: false, clinicsLoadingError: action.payload };
        default:
            return state;
    }
}

export default clinics