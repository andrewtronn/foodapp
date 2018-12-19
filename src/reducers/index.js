import { LOADED_FILE, LOADED_LOCATION, LOADED_LOCATION_DETAILS, NEW_USER, VALID_LOGIN, VALID_LOGOUT} from '../constants'


const initialState = {
    isLoggedIn: false,
    users: [
        {
          username: 'admin',
          password: 'admin'
        }
      ],
    user: [
        {
          username: "",
          password: "",
        }
        ],
    data: {},
    locationData: {},
    locationDetails: {}
}

   

const logInCheck = (user, state) => {
    for (let x of state.users) {
            if (x.username === user.username && x.password === user.password) {
            return true;
        } else{
        return false;
        }
    }
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
        case NEW_USER:
            updatedState = {
                ...state,
                user: action.payload,
            }
            return updatedState;
        case VALID_LOGIN:
            if (logInCheck(action.payload, state)) {
                updatedState = {
                ...state,
                isLoggedIn: true
                };
            }
          return updatedState;
        case VALID_LOGOUT:
                updatedState = {
                ...state,
                isLoggedIn: false
                };
          return updatedState;
        default:
            return state;
    }
}

export default rootReducer;