import axios from "axios";
import React from "react";
import { useState } from "react";
import {useForm} from 'react-hook-form'
import arrowR from "../../assets/arrow-right.svg";
import arrowD from "../../assets/arrow-down.svg";

import Popup from "../popup/Popup";


import style from "./Footer.module.scss";

import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const [activePopup,setActivePopup]=useState(false);


  const {
    register,
    // formState:{
    //   errors,
    // },
    handleSubmit,
    reset,
  } =useForm();
const onSubmit =async(data)=>{
  
  
  const email ={
    email:JSON.stringify(data.email).split('').filter(item=>item !=='"').join('')
  }
  await axios.post('https://648328acf2e76ae1b95c0b92.mockapi.io/emails',email)
  
  setActivePopup(true);
  reset();
}

  const [changeArrow,setChangeArrow]  = React.useState(false)

  const activeAnimation =()=>{
    setChangeArrow(true)
  
    
  }

  return(
  <footer className={style.conteiner}>
    <form  onSubmit={handleSubmit(onSubmit)} className={style.conteiner_form}>
      <input type="email"  className={style.conteiner_form_email} 
      {...register('email',{
        required:true,
      })}
      placeholder='Enter your Email and get notified'
      />
      
      <button type="submit" className={style.btn}>
        <img src={arrowR } alt="" />
      </button>
    </form>
    <div className={changeArrow?style.conteiner_btn_events_change :style.conteiner_btn_events}>

    <Link activeClass="active"
    to="eventPage"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>
        <div className={style.block} onClick={()=>activeAnimation()}>
        Other Events
          <img src={arrowD} alt=""  className={changeArrow ?style.changed_arrow:style.basic_arrow} />

        </div>
          {changeArrow &&
          <div className={style.border}></div>
          }
    </Link>
    </div>
    {
      activePopup && <Popup active={activePopup} setActive={setActivePopup}/>
    }
  </footer>)
};

export default Footer;
