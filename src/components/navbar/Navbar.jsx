"use client";
import React from "react";
import Link from "next/link";
import style from "../navbar/navbar.module.css";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 5,
    title: "blog",
    url: "/blog",
  },
  {
    id: 6,
    title: "dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  return (
    <div className={style.container}>
      <Link className={style.logo} href="/">
        Blog tuilaPhuong
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
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
