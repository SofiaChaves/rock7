import React,{ useState } from 'react'
import {connect} from 'react-redux'
import { getSensorsWithHistory } from '../../redux'

import styles from './cards.module.css'

import Card from './Card'

const Cards = ({ loading, sensors, error }) => {

    return loading ? (<div>loading</div>) : 
    error ? (<div>{error}</div>) : 
    (
        <div>
            <h1>Sensors</h1>
            <div className={styles.cards}>
                {sensors.map(sensor =>
                    <Card sensor={sensor.history[0]}/>
                )}
            </div>            
        </div>        
    )
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        sensors: state.data != [] ? getSensorsWithHistory(state) : state.data,
        error: state.error
    }
}

export default connect(mapStateToProps)(Cards)
