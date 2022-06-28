import React from "react";
import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}><a className={style.link} href="#s">Main</a></div>
      <div className={style.item}><a className={style.link} href="#s">About</a></div>
      <div className={style.item}><a className={style.link} href="#s">Contacts</a></div>
    </nav>
  );
}