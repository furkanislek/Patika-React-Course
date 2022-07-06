import React from 'react'
import styles from "./styles.module.css"

function A() {
  return (
    <div className={`${styles.title} ${styles.header}`} >A</div>
  )
}

export default A