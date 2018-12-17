import { LOADED_FILE, LOADED_LOCATION, LOADED_LOCATION_DETAILS } from '../constants'


const initialState = {
    data: {},
    locationData: {},
    locationDetails: {},
}




const rootReducer = (state = initialState, action) => {
    let updatedState;

    switch (action.type) {
        case LOADED_FILE:
            updatedState = {
                ...state,
                data: action.payload
            }
            return updatedState;
        case LOADED_LOCATION:
            updatedState = {
                ...state,
                locationData: action.payload
            }
            return updatedState;
        case LOADED_LOCATION_DETAILS:
            updatedState = {
                ...state,
                locationDetails: action.details,
            }
            return updatedState;
        default:
            return state;
    }
}

export default rootReducer;