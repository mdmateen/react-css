import React from 'react'
 import styles from '../components/myStyles.module.css';   
function CSSModule() {
    return (
        <>
            <h1>CSS Module</h1>
            <h1 className={styles.mystyle}>My name is Mateen</h1>
            <p className={styles.parastyle}>Working in Deoitte USI .</p>
        </>
    )
}

export default CSSModule