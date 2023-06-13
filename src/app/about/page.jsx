import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import websites from "../../../public/websites.jpg";
import Button from "../../components/Button/button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={websites} alt="" className={styles.img} fill="true" />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Sinh viên kỹ thuật phần mềm</h1>
          <h2 className={styles.imgDesc}>Developer</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Thông tin</h1>
          <p className={styles.desc}>
            Tôi là một sinh viên năm 3 của trường đại học công nghệ thông tin
            đại học quốc gia thành phố Hồ Chí Minh. Tôi đang theo học chuyên
            ngành kỹ thuật phần mềm. <br /> Tôi có một niềm đam mê với lập trình
            và tôi muốn trở thành một lập trình viên chuyên nghiệp.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Kỹ năng</h1>
          <p className={styles.desc}>
            Tôi có một số kỹ năng về lập trình như: <br /> - HTML, CSS,
            Javascript, ReactJS, NodeJS, MongoDB, MySQL, PHP, Laravel, Python,
            Django, Java, C#, C++, C, ...
          </p>
          <Button url="/contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
