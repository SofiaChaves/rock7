import React, { useState } from 'react'
import {connect} from 'react-redux'
import { GoogleMap, Marker, withGoogleMap, withScriptjs, } from "react-google-maps"
import { selectSensor } from '../../redux';
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

const mapStyles = {
    width: '100%',
    height: '30vh'
  };

const Map = withScriptjs(withGoogleMap(({ sensors, selectedSensor, selectSensor }) => {

    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 51.56, lng: -1.78 }}
        >
            {sensors.map(sensor =>
                <Marker 
                    position={{ lat: parseFloat(sensor.history[0].latitude), lng: parseFloat(sensor.history[0].longitude) }} 
                    icon={sensor.sensorId === selectedSensor.sensorId ? '/circle-selected.svg' : '/circle.svg'}
                    onClick={() => {selectSensor(sensor.sensorId)}}>                    
                </Marker>
            )}            
        </GoogleMap>
        
    )
}))

const mapStateToProps = state => {
    return {
        loading: state.sensors.loading,
        sensors: state.sensors.data,
        error: state.sensors.error,
        selectedSensor: state.selectedSensor
    }
}
const mapDispactchToProps = dispatch => {
    return {
        selectSensor: sensor => dispatch(selectSensor(sensor))
    }
}

export default connect(mapStateToProps,mapDispactchToProps)(Map)
