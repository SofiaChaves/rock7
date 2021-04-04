import React from 'react'
import styles from './card.module.css'

const Card = ({ sensor }) => {
    const data = sensor.payload
    return sensor ? (
        <div className={styles.card}>
            <div className={styles.header}>
                {/* temperature */}
                <span>{data.battery?.value} {data.battery?.unit}</span>
            </div>
            <div className={styles.body}>
                {/* temperature */}
                <div>
                    <span>{data.temperature?.value} {data.temperature?.unit}</span>
                </div>
                {/* state */}
                <div>
                    <span>{data.state}</span>
                </div>
                {/* oxygen */}
                <div>
                    <span>{data.oxygen?.value} {data.oxygen?.unit}</span>
                </div>
                {/* height */}
                <div>
                    <span>{data.height?.value} {data.height?.unit}</span>
                </div>
                {/* speed */}
                <div>
                    <span>{data.speed?.value} {data.speed?.unit}</span>
                </div>
            </div>
        </div>
    ) : <div>error loading data</div>
}

export default Card
