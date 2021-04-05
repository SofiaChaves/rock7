import { SELECT_SENSOR } from './sensorTypes'

const initialState = {
    sensorId: ''
}

const sensorReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_SENSOR: 
            return {
                sensorId: action.payload,
            }

        default: return state
    }

}

export default sensorReducer