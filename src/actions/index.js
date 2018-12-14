import { LOADED_FILE } from '../constants'

import axios from 'axios';

// var config = {
//     headers: {'X-My-Custom-Header': 'e72ea3a9fe87325d55dd0b6d7b2a010f'}
//    };

// export const getfile = () => dispatch => 
// axios.get("https://developers.zomato.com/api/v2.1/categories",config) 
//     .then(res => {
//         // dispatch(sendData(LOADED_FILE,res.data))
//         let data= res
        
        
//     })


export const sendData = (type, data) => ({type:type, payload: data})

