"use client";
import React from "react";
import Link from "next/link";
import style from "../navbar/navbar.module.css";
const links = [
  {
    id: 1,
    title: "Trang chủ",
    url: "/",
  },
  {
    id: 2,
    title: "Hồ sơ",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "Liên hệ",
    url: "/contact",
  },
  {
    id: 5,
    title: "Về chúng tôi",
    url: "/about",
  },
  {
    id: 6,
    title: "Doanh mục",
    url: "/dashboard",
  },
];
const Navbar = () => {
  return (
    <div className={style.container}>
      <Link className={style.logo} href="/">
        TuiLaPhuongMinh
      </Link>
      <div className={style.link}>
        {links.map((link) => (
          <Link href={link.url} key={link.id} className={style.link}>
            {link.title}
          </Link>
        ))}
        <button
          className={style.logout}
          onClick={() => {
            console.log("logout");
          }}
        >
          Đăng Xuất
        </button>
      </div>
    </div>
  );
};

export default Navbar;
