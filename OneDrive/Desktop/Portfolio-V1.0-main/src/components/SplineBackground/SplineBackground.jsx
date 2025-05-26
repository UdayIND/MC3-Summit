import React from 'react';
import Spline from '@splinetool/react-spline';
import styles from './SplineBackground.module.css';

export const SplineBackground = () => {
  return (
    <div className={styles.background}>
      <Spline
        scene="https://prod.spline.design/Q5zCgy8vuezdalR2/scene.splinecode"
      />
    </div>
  );
}; 