import { combineReducers } from 'redux'
import dataReducer from './data/dataReducer'
import sensorReducer from './sensor/sensorReducer'

const rootReducer = combineReducers({
    sensors: dataReducer,
    selectedSensor: sensorReducer
})

export default rootReducer