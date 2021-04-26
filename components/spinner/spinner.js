import React from 'react'
import Styles from './spinner.module.scss'

const Spinner = () => {
    return (
        <div className={Styles.container}>
            <svg  className={Styles.spinner} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle className={Styles.path} fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
        </div>
    )
}

export default Spinner
