import React,{ useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchData, getSensorsWithHistory } from '../redux'

import Head from 'next/head'
import Table from '../components/Table'
import styles from '../styles/Home.module.css'
import Cards from '../components/Cards'

const Home = ({ fetchData }) => {
  
  useEffect(() => {
    fetchData()
  }, [ ])

  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cards />
      <Table />
      
    </div>
  )
}

const mapDispactchToProps = dispatch => {
  return {
      fetchData: () => dispatch(fetchData())
  }
}

export default connect(null,mapDispactchToProps)(Home)