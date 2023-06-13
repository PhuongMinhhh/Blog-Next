import styles from "./page.module.css";
import Image from "next/image";
import Hero from "../../public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          thiết kế tốt hơn cho các sản phẩm kỹ thuật số của bạn
        </h1>

        <p className={styles.desc}>
          biến ý tưởng của bạn thành hiện thực. chúng tôi tập hợp các nhóm từ
          ngành công nghệ toàn cầu
        </p>
        <button className={styles.button}>
          xem các tác phẩm của chúng tôi
        </button>
      </div>
      <div className={styles.item}>
        <Image
          width={500}
          height={500}
          src={Hero}
          alt="Picture of the author"
          className={styles.img}
        />
      </div>
    </div>
  );
}
