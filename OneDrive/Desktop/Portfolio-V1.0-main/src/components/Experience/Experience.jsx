import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import history from"../../data/history.json";

const glideInVariantBottom = {
  hidden: { opacity: 0, y: 100 }, // Start from 100px below and fully transparent
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } // Glide up to original position and fully opaque
};

const glideInVariantTop = {
  hidden: { opacity: 0, y: -50 }, // Start from 50px above and fully transparent
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } // Glide down to original position and fully opaque
};

export const Experience = () => {
    return (
    <section className={styles.container} id="experience">
        <motion.h2 
          className={styles.title}
          variants={glideInVariantTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className={styles.content}>
            <ul className={styles.history}>
                {history.map((historyItem, id) => (
                    <motion.li
                        key={id}
                        className={styles.historyItem}
                        variants={glideInVariantBottom}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className={styles.dateCol}>
                          {historyItem.startDate} - {historyItem.endDate}
                        </div>
                        <div className={styles.cardCol}>
                          <div className={styles.historyItemDetails}>
                            <h3>
                              {historyItem.role}
                              <span className={styles.company}> - {historyItem.organisation}</span>
                            </h3>
                            <p>{historyItem.description}</p>
                            <div className={styles.toolsRow}>
                              {historyItem.tools && historyItem.tools.map((tool, i) => (
                                <span key={i} className={styles.tool}>{tool}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    </section>
    );
};