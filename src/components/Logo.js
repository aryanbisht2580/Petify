import React from 'react'
import styles from "./logoStyles.module.css"
function Logo() {
  return (
    <div style={{width:"100%",display:"flex",marginBottom:40}}>
        <div className={styles.outerDiv}>
        <img src='./icon.png' style={{height:"100%",width:"100%",}}/>
    </div>
    </div>
  )
}

export default Logo