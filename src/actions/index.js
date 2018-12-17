import { LOADED_FILE } from '../constants'

import axios from 'axios';

const config = {
    headers: {'user-key': 'e72ea3a9fe87325d55dd0b6d7b2a010f'}
   };

export const getFile = (searchInput) => dispatch => {
console.log(searchInput)

axios.get(`https://developers.zomato.com/api/v2.1/${searchInput}`,config) 
    .then(res => {
        dispatch(sendData(LOADED_FILE,res.data))
        console.log(res.data)        
        
    })
}

export const sendData = (type, data) => ({type:type, payload: data})

