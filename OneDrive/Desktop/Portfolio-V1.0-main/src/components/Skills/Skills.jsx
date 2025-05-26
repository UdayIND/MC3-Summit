import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { motion } from "framer-motion";
// Import relevant icons from react-icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular } from "react-icons/fa";
import { SiMysql, SiPython, SiR } from "react-icons/si";
import { getImageUrl } from "../../utils";

const iconMap = {
  HTML5: <FaHtml5 color="#E44D26" />,
  CSS3: <FaCss3Alt color="#1572B6" />,
  JavaScript: <FaJs color="#F7DF1E" />,
  React: <FaReact color="#61DAFB" />,
  Angular: <FaAngular color="#DD0031" />,
  Python: <SiPython color="#3776AB" />,
  R: <SiR color="#276DC3" />,
  MySQL: <SiMysql color="#00758F" />,
};

const glideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' } })
};

const glideInVariantTop = {
  hidden: { opacity: 0, y: -50 }, // Start from 50px above and fully transparent
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } // Glide down to original position and fully opaque
};

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <motion.h2 
        className={styles.heading}
        variants={glideInVariantTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Technologies
      </motion.h2>
      <div className={styles.skillsRow}>
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className={styles.skillIconWrapper}
            custom={idx}
            variants={glideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {iconMap[skill.title] ? (
              React.cloneElement(iconMap[skill.title], { className: styles.skillIcon })
            ) : (
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={skill.title}
                className={styles.skillIcon}
                title={skill.title}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 