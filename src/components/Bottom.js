import React from 'react'
import { motion } from 'framer-motion'
import styles from "./Bottom.module.css"
import DownButton from './DownButton'
function Bottom() {
  return (
    <div className={styles.outerDiv}>
        <div className={ styles.innerDiv}>
        {/* Unleash the Joy - Get Petify Now! */}
        <motion.div initial={{x:-100,opacity:0}} whileInView={{x:[null,0],opacity:[null,1],transition:{duration:.5}}}>Unleash the Joy </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:[null,1],transition:{delay:0.25,duration:.5}}} style={{margin:"1rem"}}>-</motion.div>
        <motion.div initial={{x:100,opacity:0}} whileInView={{x:[null,0],opacity:[null,1],transition:{duration:.5}}}>Get Petify Now! </motion.div>
        
        </div>
        <DownButton/>
    </div>
  )
}

export default Bottom 