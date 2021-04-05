import React,{ useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchData, getSensorsWithHistory } from '../redux'

import Head from 'next/head'
import Table from '../components/Table'
import styles from '../styles/Home.module.css'
import Cards from '../components/Cards'

const Home = ({ fetchData, selectedSensor }) => {
  
  useEffect(() => {
    fetchData()
  }, [ ])

  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/font-awesome/css/fontawesome.min.css" rel="stylesheet"/>
        <link href="/font-awesome/css/light.min.css" rel="stylesheet"/>
      </Head>

      <Cards />
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