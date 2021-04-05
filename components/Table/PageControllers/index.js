import React from 'react'
import styles from './PageControllers.module.css'

const PageControllers = ({page, setPage, numberOfRows, max}) => {
    return (
        <div className={styles.controllersWrapper}>
            <span 
                onClick={() => setPage(page == 1 ? page : 1)}
                className={page == 1 ? styles.disabled : ''}>
                    <i className="fal fa-chevron-double-left"></i>FIRST</span>
            <span 
                onClick={() => setPage(page == 1 ? page : page - 1)}
                className={page == 1 ? styles.disabled : ''}>
                    <i className="fal fa-chevron-left"></i>PREV</span>
            <div>{page}</div>
            <span 
                onClick={() => setPage(max <= page ? page : page + 1)}
                className={max <= page ? styles.disabled : ''}>
                    NEXT<i className="fal fa-chevron-right"></i></span>
            <span 
                onClick={() => setPage(max <= page ? page : max)}
                className={max <= page ? styles.disabled : ''}>
                    LAST<i className="fal fa-chevron-double-right"></i></span>
        </div>
    )
}

export default PageControllers
