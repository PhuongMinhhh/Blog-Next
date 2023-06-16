import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import illustration from "../../../../public/illustration.png";
import Button from "../../../components/Button/button";
const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Tôi là một sinh viên năm 3 của trường đại học công nghệ thông tin
            đại học quốc gia thành phố Hồ Chí Minh. Tôi đang theo học chuyên
            ngành kỹ thuật phần mềm. <br /> Tôi có một niềm đam mê với lập trình
            và tôi muốn trở thành một lập trình viên chuyên nghiệp.</p>
          <Button text="Xem thêm" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={illustration}
            alt=""
            fill={true}
          ></Image>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="Xem thêm" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={illustration}
            alt=""
            fill={true}
          ></Image>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="Xem thêm" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={illustration}
            alt=""
            fill={true}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Category;
