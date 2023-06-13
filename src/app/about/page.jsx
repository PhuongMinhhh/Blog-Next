import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import github from "../../../public/github.png";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          
          height={500}
          src={github}
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.texContainer}></div>
    </div>
  );
};

export default About;
