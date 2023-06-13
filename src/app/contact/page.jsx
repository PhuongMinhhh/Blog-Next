import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import ct from "../../../public/contact.png";
import Button from "../../components/Button/button";
const Contact = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Liên hệ với tôi</h1>
      <div className={style.content}>
        <div className={style.imgContainer}>
          <Image className={style.image} src={ct} fill={true}></Image>
        </div>
        <form className={style.form}>
          <input type="text" placeholder="name" className={style.input} />
          <input type="text" placeholder="email" className={style.input} />
          <textarea
            className={style.textArea}
            placeholder="message"
            cols="30"
            rows="10"
            
          ></textarea>
          <Button url="submit" text="Gửi thông tin"></Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
