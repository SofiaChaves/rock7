import React,{ useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { getSensorBySensorId } from '../../redux'

import styles from './table.module.css'
import PageControllers from './PageControllers'

const Table = ({ sensor }) => {
    const [page,setPage] = useState(1)
    const numberOfRows = 10;

    useEffect(()=>{
        setPage(1)
    },[sensor])

    return (
        <div>
            <h1>History of selected Sensor</h1>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.headerTr}>
                            <th>Date</th>
                            <th>Temperature</th>
                            <th>Oxygen</th>
                            <th>Speed</th>
                            <th>State</th>
                            <th>Height</th>
                            <th>Alarm</th>
                        </tr>
                        {sensor.history?.slice(numberOfRows*(page-1), numberOfRows*page)?.map(entry =>
                            <tr key={entry.id}>
                                <td>{new Date(entry.transmittedAt.iso).toDateString()}</td>
                                <td>{entry.payload.temperature.value}{entry.payload.temperature.unit}</td>
                                <td>{entry.payload.oxygen.value}{entry.payload.oxygen.unit}</td>
                                <td>{entry.payload.speed.value}{entry.payload.speed.unit}</td>
                                <td>{entry.payload.state}</td>
                                <td>{entry.payload.height.value}{entry.payload.height.unit}</td>
                                <td>{entry.payload.alarm ? 'ON' : 'OFF'}</td>
                            </tr>
                        )}
                        <tr className={styles.footerTr}>
                            <td colSpan='7'>
                                <PageControllers page={page} setPage={setPage} numberOfRows={10} max={Math.ceil(sensor.history.length/numberOfRows)}/>
                            </td>
                        </tr>
                    </tbody>                
                </table>
            </div>      
        </div>     
        
    )
}

const mapStateToProps = state => {
    return {
        sensor: getSensorBySensorId(state.selectedSensor.sensorId, state.sensors.data),
    }
}


export default connect(mapStateToProps)(Table)
