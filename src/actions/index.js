import { LOADED_FILE, LOADED_LOCATION, LOADED_LOCATION_DETAILS } from '../constants'

import axios from 'axios';

const config = {
    headers: { 'user-key': 'e72ea3a9fe87325d55dd0b6d7b2a010f' }
};

export const getFile = (searchInput) => dispatch => {


    axios.get(`https://developers.zomato.com/api/v2.1/${searchInput}`, config)
        .then(res => {
            dispatch({ type: LOADED_FILE, payload: res.data })
            console.log(res.data)

        })
}

export const getLocation = (locationInput) => dispatch => {

    axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${locationInput}`, config)
        .then(res => {
            dispatch({ type: LOADED_LOCATION, payload: res.data })
            console.log(res.data)
            this.setState({
                entityID: res.data.location_suggestions.entity_id,
                entityType: res.data.location_suggestions.entity_type
            })

        })
}

export const getLocationDetails = (entityID, entityType) => dispatch => {

    axios.get(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${entityID}&entity_type=${entityType}`, config)
        .then(res => {
            dispatch({ type: LOADED_LOCATION_DETAILS, payload: res.data })
            console.log(res.data)  
        })
}
