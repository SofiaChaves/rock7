import React,{ useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchData } from '../redux'

import styles from '../styles/Home.module.css'
import Table from '../components/Table'
import Cards from '../components/Cards'
import Map from '../components/Map'
import Meta from '../meta'

const Home = ({ fetchData, selectedSensor }) => {
  
  useEffect(() => {
    fetchData()
  }, [ ])

  return (
    <div className={styles.container}>
      <Meta />

      <Cards />
      <Map />
      <hr/>
      { selectedSensor.sensorId ? <Table /> : null }
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
      selectedSensor: state.selectedSensor,
  }
}
const mapDispactchToProps = dispatch => {
  return {
      fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps,mapDispactchToProps)(Home)