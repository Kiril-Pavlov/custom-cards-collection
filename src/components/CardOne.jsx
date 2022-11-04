import React from 'react'

import styles from "./CardOne.module.css"

import charlesLeclerc from "../assets/charles-leclerc.jpg"
import car from "../assets/f1-car.png"

const CardOne = () => {
  return (
    <div className={styles.cardOneContainer}>
        <div className={styles.cardOneImageContainer}>
            <img src={charlesLeclerc} alt="Charles Leclerc" />
        </div>
        <div className={styles.cardOneDescription}>
            <div className={styles.cardOneDescriptionTitle}>Charles Leclerc</div>
            <img src={car} alt="Ferrari car" className={styles.cardOneDescriptionImage}/>
            <button className={styles.cardOneDescriptionButton}>More info...</button>
        </div>
    </div>
  )
}

export default CardOne