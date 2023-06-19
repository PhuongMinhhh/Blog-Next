import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const Post = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link href="/blog/testID" className={styles.container} key={item.id}>
          <div className={styles.imgContainer}>
            <Image
              src="https://www.technewsworld.com/wp-content/uploads/sites/3/2022/09/Windows-11.jpg"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Post;
