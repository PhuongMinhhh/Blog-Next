import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>
        <div className={styles.items}>
          <Link className={styles.item} href="/portfolio/illustrations"></Link>
          <span className={styles.title}>Illustrations</span>
        </div>
      </h1>
    </div>
  );
};

export default Portfolio;
