import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import spotleft from "../../assets/spot1.svg";
import spotrigth from "../../assets/spot2.svg";

import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.block}>
     
        <img src={spotleft} alt=""  className= {style.block_spotL}/>
      <Link to="/">
        <img src={logo} alt="" className={style.logo} />
      </Link>
      
        <img src={spotrigth} alt=""  className= {style.block_spotR} />
    </header>
  );
};

export default Header;
