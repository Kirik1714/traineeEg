import React, { useRef } from "react";
import { Link } from "react-router-dom";
import dots from "../../assets/dot.svg";
import swooge from "../../assets/swooge.svg";
import arrowR from "../../assets/arrow-right.svg";


import style from "./Main.module.scss";

const Main = () => {
  const [daysT, setDaysT] = React.useState("00");
  const [hoursT, setHoursT] = React.useState("00");
  const [minutesT, setMinutesT] = React.useState("00");
  const [secondsT, setSecondsT] = React.useState("00");

  const [width, setWidth] = React.useState(window.innerWidth);

  const strDays = width < 807 ? "DD" : "Days";
  const strHours = width < 807 ? "HH" : "Hours";
  const strMinutes = width < 807 ? "MM" : "Minutes";
  const strSec = width < 807 ? "SS" : "Seconds";

  let refreshDate =useRef()

  const startTimer = () => {
    const specifiedDate = new Date("Mon July 07 2023 00:00:00");
    refreshDate = setInterval(() => {

      const currentDate = new Date();
      const differentDates = specifiedDate - currentDate;

      const days = Math.floor(differentDates / 1000 / 60 / 60 / 24);
      const hours = Math.floor(differentDates / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(differentDates / 1000 / 60) % 60;
      const seconds = (Math.floor(differentDates / 1000) % 60);
     
     
      if (differentDates <0) {
        clearInterval(refreshDate.current);
      } else {
        setDaysT(days);
        setHoursT(hours<10?'0'+hours:hours);
        setMinutesT(minutes<10?'0'+minutes:minutes);
        setSecondsT(seconds<10?'0'+seconds:seconds);
      }
    }, 1000);
  };

  React.useEffect(() => {
    // ForWidth
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    //ForTimer
    startTimer();

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(refreshDate.current);

      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className={style.conteiner}>
      <div className={style.conteiner_description}>
        <div className={style.conteiner_description_title}>
          Under Construction
        </div>
        <div className={style.conteiner_description_description}>
          We're making lots of improvements and will be back soon
        </div>
      </div>
      <div className={style.conteiner_timer}>
        <div className={`${style.conteiner_timer_block} ${style.blockTimer}`}>
          <div className={style.value}>{daysT}</div>
          <p className={style.valueTitle}>{strDays}</p>
          <img src={swooge} alt="" className={style.swooge} />
        </div>
        <img src={dots} alt="" className={style.dots} />
        <div className={`${style.conteiner_timer_block} ${style.blockTimer}`}>
          <div className={style.value}>{hoursT}</div>
          <p className={style.valueTitle}>{strHours}</p>

          <img src={swooge} alt="" className={style.swooge} />
        </div>
        <img src={dots} alt="" className={style.dots} />
        <div className={`${style.conteiner_timer_block} ${style.blockTimer}`}>
          <div className={style.value}>{minutesT}</div>
          <p className={style.valueTitle}>{strMinutes}</p>

          <img src={swooge} alt="" className={style.swooge} />
        </div>
        <img src={dots} alt="" className={style.dots} />
        <div className={`${style.conteiner_timer_block} ${style.blockTimer}`}>
          <div className={style.value}>{secondsT}</div>
          <p className={style.valueTitle}>{strSec}</p>

          <img src={swooge} alt="" className={style.swooge} />
        </div>
      </div>
      <div className={style.conteiner_page_event}>
        <div className={style.conteiner_page_event_text}>
          Check our event page when you wait:
        </div>
        <Link to='https://egorovagency.by/#main'>

        <button className={style.conteiner_page_event_button}>
          Go to the event
          <img
            src={arrowR}
            alt=""
            className={style.conteiner_page_event_button_arrow}
          />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
