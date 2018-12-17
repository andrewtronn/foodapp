import { LOADED_FILE, LOADED_LOCATION, LOADED_LOCATION_DETAILS } from '../constants'

import axios from 'axios';

const config = {
    headers: { 'user-key': 'e72ea3a9fe87325d55dd0b6d7b2a010f' }
};

let entityID;
let entityType;

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
            entityID = res.data.location_suggestions[0].entity_id;
            entityType = res.data.location_suggestions[0].entity_type;

        })
}

export const getLocationDetails = () => dispatch => {

     

    axios.get(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${entityID}&entity_type=${entityType}`, config)
        .then(res => {
            dispatch({ type: LOADED_LOCATION_DETAILS, payload: res.data })
            console.log(res.data)
            const popularity = res.data.popularity;
            const nightlife_index = res.data.nightlife_index;
            const cuisines = res.data.top_cuisines.map((cuisine,index) => (
                                console.log("Cuisine: " + cuisine)
                            ));
            const bestRestaurants = res.data.best_rated_restaurant;
            console.log("Popularity: " + popularity);
            console.log("NightLife Index: " + nightlife_index);
            console.log(bestRestaurants)
            for (let restaurant of bestRestaurants){
                console.log(restaurant.restaurant.name)
            }





        })
}
