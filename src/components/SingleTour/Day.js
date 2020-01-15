import React, { useState } from "react"
import { FaAngleDown, FaAngleRight } from "react-icons/fa"
import styles from "../../css/day.module.css"

const Day = ({ day, info }) => {
  const [showInfo, setInfo] = useState(false)
  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
  }
  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button className={styles.btn} onClick={toggleInfo}>
          {showInfo ? <FaAngleDown /> : <FaAngleRight />}
        </button>
      </h4>
      <p className={showInfo ? `${styles.showNav}` : `${styles.hideNav}`}>
        {info}
      </p>
    </article>
  )
}

export default Day
