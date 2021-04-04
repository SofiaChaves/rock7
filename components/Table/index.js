import React,{ useState } from 'react'
import {connect} from 'react-redux'
import { getSensorsWithHistory } from '../../redux'

import styles from './table.module.css'

const Table = ({ loading, sensors, error }) => {
    const [page,setPage] = useState(1);
    const [numberOfRows,setNumberOfRows] = useState(30);
    const [searchText,setSearchText] = useState('');


    return loading ? (<div>loading</div>) : 
        error ? (<div>{error}</div>) : 
        (
            <div>
                <input type='text' value={searchText} onChange={(e)=> {setSearchText(e.target.value)}}></input>
                <table className={styles.table}>
                    <tbody>
                        {sensors.filter((sensor) => sensor.sensorId.includes(searchText)).slice(numberOfRows*(page-1), numberOfRows*page)?.map(sensor =>
                        <tr key={sensor.id}>
                            <td>{sensor.id}</td>
                            <td>{sensor.longitude}</td>
                            <td>{sensor.latitude}</td>
                            <td>{sensor.sensorId}</td>
                            <td>{sensor.bytes}</td>
                        </tr>
                    )}
                    </tbody>                
                </table>
                <button onClick={() => setPage(page == 1 ? page : page - 1)}>PREV</button>
                <button onClick={() => setPage((sensors.length/numberOfRows) <= page ? page : page + 1)}>NEXT</button>
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


export default connect(mapStateToProps)(Table)
