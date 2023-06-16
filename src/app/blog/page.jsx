import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
const Post = () => {
  return (
    <div className={styles.container}>
      <Link href="/blog/testID" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://www.technewsworld.com/wp-content/uploads/sites/3/2022/09/Windows-11.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testID" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://www.technewsworld.com/wp-content/uploads/sites/3/2022/09/Windows-11.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testID" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://www.technewsworld.com/wp-content/uploads/sites/3/2022/09/Windows-11.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Post;
