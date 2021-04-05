import React from 'react'
import {connect} from 'react-redux'
import { selectSensor } from '../../../redux'
import styles from './card.module.css'

const Card = ({ sensor, selectSensor, selectedSensor }) => {
    const data = sensor.payload
    return sensor ? (
        <div className={`${styles.card} ${sensor.sensorId == selectedSensor.sensorId? styles.selected : null}`} onClick={() => {selectSensor(sensor.sensorId)}}>
            <div className={styles.header}>
                {/* battery */}
                <div className={styles.battery}><i className="fal fa-battery-half"></i> {data.battery?.value} {data.battery?.unit}</div>
                <img src={sensor.sensorId == selectedSensor.sensorId? '/water-sensor.svg' : '/water-sensor-white.svg'} />
            </div>
            <div className={styles.body}>
                {/* temperature */}
                <div>
                    <span><i className="fal fa-thermometer-half"></i> {data.temperature?.value} {data.temperature?.unit}</span>
                </div>
                {/* state */}
                <div>
                    <span><i className="fal fa-water-rise"></i> {data.state}</span>
                </div>
                {/* oxygen */}
                <div>
                    <span><i className="fal fa-dewpoint"></i> {data.oxygen?.value} {data.oxygen?.unit}</span>
                </div>
                {/* height */}
                <div>
                    <span><i className="fal fa-ruler-vertical"></i> {data.height?.value} {data.height?.unit}</span>
                </div>
                {/* speed */}
                <div>
                    <span><i className="fal fa-tachometer-alt-fast"></i> {data.speed?.value} {data.speed?.unit}</span>
                </div>
            </div>
        </div>
    ) : <div>error loading data</div>
}

const mapStateToProps = state => {
    return {
        selectedSensor: state.selectedSensor,
    }
}
const mapDispactchToProps = dispatch => {
    return {
        selectSensor: sensor => dispatch(selectSensor(sensor))
    }
  }

export default connect(mapStateToProps, mapDispactchToProps)(Card)
