//util functions
function sortDatesMaxToMin (a, b) {
    return b.getTime() - a.getTime()
}

function getSensorsUniqueIds (data) {
    //map: getting an array with all the sensor Ids from which object 
    //Set: getting all the unique sensor Ids and converting it back to an array
    return [...new Set(data.map(item => item.sensorId))]
}

function getSensorsHistorySortedByDate (sensorHistory) {
    return sensorHistory.sort((a,b)=>sortDatesMaxToMin(new Date(a.transmittedAt.iso), new Date(b.transmittedAt.iso)))
}

function getSensorsHistoryBySensorId (data, id) {
    //filter the data in the json file to only get one specific sensor entries
    const history = data.filter(update => update.sensorId == id)
    //sorting the data by date of transmition
    return getSensorsHistorySortedByDate(history)
}


//selectors
export function getSensorsWithHistory(data) {
    
    const sensorsIds=getSensorsUniqueIds(data);

    //getting [{ sensorId, history: [{ json entry }] }] being history sorted by date
    const sensors = sensorsIds.map((uniqueSensorId, index) => {
        const sortedSensorUpdates = getSensorsHistoryBySensorId(data, uniqueSensorId)
        return {
            sensorId: uniqueSensorId,
            history: sortedSensorUpdates
        }
    })
    return sensors    
}

export function getSensorBySensorId(sensorId, sensors) {
    return sensors.filter(sensor => sensor.sensorId === sensorId)[0]
}
