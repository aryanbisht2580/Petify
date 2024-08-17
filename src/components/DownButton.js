import React from 'react'
import styles from "./downBtn.module.css"
import { motion } from 'framer-motion';
function DownButton() {
  const clickHandler=()=>{
    const a=document.createElement("a");
    a.href="./Petify.apk";
    a.download="Petify.apk"
    a.click();
  }
  return (
    <motion.button initial={{y:200,opacity:0}} whileInView={{y:[null,-10,0],opacity:[null,0.4,1],transition:{delay:0.2,duration:.8}}} className={styles.btnContainer} onClick={clickHandler}>
     <div className={styles.innerDiv}>
      <p className={styles.heading}>Download</p>
      <p className={styles.subHeading}> For Android</p>
     </div>
    </motion.button>
  )
}

export default DownButton