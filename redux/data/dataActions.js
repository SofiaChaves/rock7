import { 
    FETCH_DATA_REQUEST, 
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_FAILURE,
    SELECT_SENSOR
    } from './dataTypes';
import { getSensorsWithHistory } from './dataSelector'
import axios from 'axios'

const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST,
    }
}

const fetchDataSuccess = data => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}


const fetchDataFailure = error => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest())
        axios.get('http://localhost:3000/river_sensor_data.json')
            .then(res =>{
                //decoding payload of each object from base64 into json
                const decodedData = res.data.map( item => 
                    item.payload = { 
                        ...item,
                        payload: JSON.parse(atob(item.payload))
                    })
                dispatch(fetchDataSuccess(getSensorsWithHistory(decodedData)))                
            })
            .catch(error =>{
                dispatch(fetchDataFailure(error.message))
            })
    }
}