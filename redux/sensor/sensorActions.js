import { SELECT_SENSOR } from './sensorTypes'

export const selectSensor = (sensor) => {
    return {
        type: SELECT_SENSOR,
        payload: sensor
    }
}