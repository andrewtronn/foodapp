import { LOADED_FILE } from './../constants'


const initialState = {
    data:{}
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
        default:
            return state;
    }
}

export default rootReducer;