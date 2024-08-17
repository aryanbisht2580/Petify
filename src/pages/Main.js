import React from 'react'
import styles from "./mainStyle.module.css"
import Logo from '../components/Logo'
import About from '../components/about/About'
import DownButton from '../components/DownButton'
import Bottom from '../components/Bottom'
function Main() {
  return (
    <div className={styles.outerdiv}>
      {/* <div className={styles.dwnBtn}>
        <DownButton/>
      </div> */}
      <Logo/>
      <About/>
      <Bottom/>
      
    </div>
  )
}

export default Main