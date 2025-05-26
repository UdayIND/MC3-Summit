import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const typewriterPhrases = [
  "MS DS Grad Student",
  "Data Science Enthusiast"
];

export const Hero = () => {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIdx];
    let timeout;
    if (!deleting && charIdx < currentPhrase.length) {
      timeout = setTimeout(() => setCharIdx(charIdx + 1), 90);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(charIdx - 1), 40);
    } else if (!deleting && charIdx === currentPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIdx((phraseIdx + 1) % typewriterPhrases.length);
      }, 400);
    }
    setDisplayed(currentPhrase.substring(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <motion.section
      className={styles.container}
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jasmine Christopher</h1>
        <div className={styles.typewriterLine}>
          <span>{displayed}</span>
          <span className={styles.cursor}>|</span>
        </div>
        <p className={styles.description}>
          Engineer turned data scientist on a mission to transform data into intelligence using the power of ML, AI, and visual storytelling.
        </p>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </motion.section>
  );
};