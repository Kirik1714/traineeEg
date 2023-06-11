import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/img1.svg";
import small1 from "../../assets/small.jpg";
import small2 from "../../assets/small2.jpg";
import small3 from "../../assets/small3.jpg";
import small4 from "../../assets/small4.jpg";
import small5 from "../../assets/small5.jpg";
import small6 from "../../assets/small6.jpg";
import small7 from "../../assets/small7.jpg";

import smallT1 from "../../assets/smallT1.jpg";
import smallT2 from "../../assets/smallT2.jpg";
import smallT3 from "../../assets/smallT3.jpg";
import smallT4 from "../../assets/smallT4.jpg";

import smallForMob from "../../assets/smallForMob.jpg";


import style from "./Events.module.scss";

const allEvents = [
  { title: "Hawaiian party", page: "01", image: img1, smallI: small1 ,smallT:smallT1},
  { title: "Мafia party", page: "02", image: img1, smallI: small1,smallT:smallT1 },
  { title: "Party on the beach", page: "03", image: img1, smallI: small2,smallT:smallT2 },
  { title: "Party on the beach", page: "04", image: img1, smallI: small3,smallT:smallT3 },
  { title: "Home Security", page: "05", image: img1, smallI: small4,smallT:smallT4 },
  { title: "Network Design & Implementation",
    page: "06",
    image: img1,
    smallI: small5,
    smallT:smallT2
  },
  {
    title: "System Design & Engineering",
    page: "07",
    image: img1,
    smallI: small6,
    smallT:smallT3
  },
  { title: "Client Care Plans", page: "08", image: img1, smallI: small7 ,smallT:smallT4},
];

const Events = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [previosItem, setPreviosItem] = React.useState(null);

  const changeActiveItem = (index, image) => {
    setActiveIndex(index);
    setPreviosItem(image);
  };
  const [width, setWidth] = React.useState(window.innerWidth);
  const titleRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    // ForWidth
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // for title visible
    const handleScroll = () => {
      const { top, bottom } = titleRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <div className={style.conteiner} >
      <div className={ isVisible? style.conteiner_title:style.conteiner_title_empty} ref={titleRef}>All events</div>
      
      <nav className={style.conteiner_navbar} id='eventPage' >
        <ul className={style.list} >
          {allEvents.map((item, key) => (
            <li
              className={style.conteiner_navbar_item}
              onClick={() => changeActiveItem(key, item.image)}
            >
              <div className={style.item_main}>
                {activeIndex !== key && (
                
                    <img src={ width<1600 && width>740 ? item.smallT :width<740?smallForMob:  item.smallI } alt="" className={style.background} />
                )}
                <div className={style.item_title}>{item.title}</div>
                <div className={style.item_numberItem}>{item.page}</div>
              </div>

              {activeIndex === key && (
                <div className={style.limit}>
                  <div className={`${style.item_test} `}>
                    <div className={style.item_descrip_option}>
                      <div className={style.option_tab_num}>{item.page}</div>

                      <div className={style.option_text}>{item.title}</div>
                      <div className={style.option_date}>13.02.2023</div>
                      <div className={style.option_button}>
                        More information
                      </div>
                    </div>
                    <img src={item.image} alt="" />
                  </div>
                  <div
                    className={
                      activeIndex === 0
                        ? style.item_descrip
                        : `${style.item_descrip}   ${style.animation}`
                    }
                  >
                    <div className={style.item_descrip_option}>
                      <div className={style.option_tab_num}>{item.page}</div>

                      <div className={style.option_text}>{item.title}</div>
                      <div className={style.option_date}>13.02.2023</div>
                      <Link to='https://egorovagency.by/#main'>
                      <div className={style.option_button}>
                        More information
                      </div>
                      </Link>
                    </div>

                    <img src={item.image} alt="" />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default  Events;
