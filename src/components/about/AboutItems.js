import React from "react";
import styles from "./AboutItemsStyle.module.css";
import { motion } from "framer-motion";
function AboutItems({ text, image, right, image2 }) {
  return (
    <div className={styles.allDivContainer}>
      <div className={styles.outerMost}>
        {right ? (
          <>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              //   animate={{ x: [null, 10, 0], opacity: [0, 0.5, 1] }}
              //   transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
              className={styles.divElement}
              whileInView={{
                x: [null, 10, 0],
                opacity: [null, 0.5, 1],
                transition: { duration: 1, delay: 0.25 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {text}
            </motion.div>
            <div className={styles.divElement}>
              <motion.img
                src={image}
                className={styles.imageStyle}
                initial={{ y: 150, opacity: 0 }}
                // animate={{ y: [100, -10, 0] }}
                // transition={{ ease: "easeOut", duration: 1.5 }}
                whileInView={{
                  y: [null, -10, 0],
                  opacity: [null, 0.8, 1],
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                viewport={{ once: false, amount: 0.2 }}
              />

              {image2 && (
                <motion.img
                  src={image2}
                  className={styles.imageStyle}
                  initial={{ y: -150, opacity: 0 }}
                  //   animate={{ y: [100, -10, 0] }}
                  //   transition={{ ease: "easeOut", duration: 1.5 }}
                  whileInView={{
                    y: [null, 10, 0],
                    opacity: [null, 0.8, 1],
                    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                />
              )}
            </div>
          </>
        ) : (
          <>
            <div className={styles.divElement}>
              <motion.img
                src={image}
                className={styles.imageStyle}
                initial={{ y: 150, opacity: 0 }}
                //   animate={{ y: [100, -10, 0] }}
                //   transition={{ ease: "easeOut", duration: 1.5 }}
                whileInView={{
                  y: [null, -10, 0],
                  opacity: [null, 0.8, 1],
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                viewport={{ once: false, amount: 0.2 }}
              />

              {image2 && (
                <motion.img
                  src={image2}
                  className={styles.imageStyle}
                  initial={{ y: -150, opacity: 0 }}
                  //   animate={{ y: [100, -10, 0] }}
                  //   transition={{ ease: "easeOut", duration: 1.5 }}
                  whileInView={{
                    y: [null, 10, 0],
                    opacity: [null, 0.8, 1],
                    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                />
              )}
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              //   animate={{ x: [null, 10, 0], opacity: [0, 0.5, 1] }}
              //   transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
              className={styles.divElement}
              whileInView={{
                x: [null, -10, 0],
                opacity: [null, 0.5, 1],
                transition: { duration: 1, delay: 0.25 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {text}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

export default AboutItems;
