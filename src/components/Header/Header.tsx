import React from "react";
import './Header.module.css'
import logo from '../../images/anna-logo-blue.svg'
import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <img className={style.front} src={logo} alt="logo"/>
        <img className={style.back} src={logo} alt="logo"/>
      </div>
    </header>
  );
}