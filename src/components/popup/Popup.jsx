import React, { useRef } from "react";
import close from "../../assets/close.svg";

import style from "./Popup.module.scss";

const Popup = ({active,setActive}) => {
  const popupRef = useRef(null);

    React.useEffect(() => {
        const handleClickOutsite = (event) => {

       
        setActive(false);
          if (popupRef.current && !popupRef.current.contains(event.target)) {
          }
        };
        document.body.addEventListener("click", handleClickOutsite);
        return () => {
          document.body.removeEventListener("click", handleClickOutsite);
        
        };
      }, []);
  return (
    <div className={style.block} ref={popupRef}>
      <div className={style.block_content} onClick={event=>event.stopPropagation()}>
        <div className={style.block_content_img_close} onClick={()=>setActive(false)}>
          <img src={close} alt="" />
        </div>
        <div className={style.block_content_result}>SUCCESS!</div>
        <div className={style.block_content_result_description}>
          You have successfully subscribed to the email newsletter
        </div>
        <div className={style.block_content_btn_close} onClick={()=>setActive(false)}>Close</div>
      </div>
    </div>
  );
};

export default Popup;
