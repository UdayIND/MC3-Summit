import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const imageVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const textVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export const About = () => {
    return (
     <motion.section
      className={styles.container}
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      id="about"
    >
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <motion.p
          className={styles.aboutText}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Hi, I'm Jasmine Christopher, a curious problem solver and currently a Master's student in Data Science at Indiana University Bloomington. My background is in Electronics and Instrumentation Engineering from Anna University, and I started my career as a Junior MES Engineer, where I built tools like MES Lite, automated reporting processes, and worked with teams across the globe to improve manufacturing systems. That hands-on experience sparked my deeper interest in data and how it can drive smarter decisions. Since then, I've explored projects in medical image classification, disease prediction, and stock forecasting, using tools like Python, R, SQL, Scikit-learn, TensorFlow, Power BI, Tableau, and Azure. I love working through the entire data journey from cleaning and modeling to building meaningful visualizations. Outside of tech, I'm into sketching, long walks, and playing badminton—they keep me grounded, creative, and balanced.
        </motion.p>
      </div>
    </motion.section>
    );
};