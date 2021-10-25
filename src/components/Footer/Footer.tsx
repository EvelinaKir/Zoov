import styles from "./footer.module.css";
import whatsApp from "../../images/footer/whatsApp.svg";
import telegram from "../../images/footer/TelegramLogo.svg";
import React, { SyntheticEvent } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const Footer = () => {
const [checked, setChecked] = useState<boolean>(false)

const handleChange = (e: {target: HTMLInputElement}) => {
  setChecked(e.target.checked)
}

  return (
    <div className={styles.mainBox}>
      <div className={styles.upperFooter}>
        <div className={styles.contacts}>
          <span className={styles.contactsTitle}>Контакты</span>
          <span className={styles.contactsSubTitle}>
            Вы всегда можете с нами связаться по телефону или в мессенджерах
          </span>
          <span className={styles.contactsNumber}>+7 (900)000-00-00</span>
          <button className={styles.whatsAppButton}>
            {" "}
            <img src={whatsApp} alt="WhatsApp logo" />{" "}
            <span>Написать в WhatsApp</span>{" "}
          </button>
          <button className={styles.telegramButton}>
            <img src={telegram} alt="Telegram logo" />{" "}
            <span>Написать в Telegram</span>{" "}
          </button>
          <span className={styles.subscribe}>
            Подписывайтесь на наш <a href="#">Instagram</a> и следите за
            новостями
          </span>
        </div>
        <div className={styles.questionField}>
          <div className={styles.questionFieldTitle}>
            <span className={styles.questionFieldHeader}>
              Остались вопросы?
            </span>
            <span className={styles.questionFieldSubHeader}>
              Напишите нам и мы обязательно подробно на них ответим.
            </span>
          </div>
          <form>
            <div className={styles.userInfo}>
              <input type="text" placeholder="Имя" />
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles.inputQestion}>
                <textarea rows={10} cols={87} placeholder='Ваш вопрос...'/>
            </div>
            <div className={styles.inputReady}>
              <div className={styles.checkbox}>
                <input type="checkbox" onChange={(e) => handleChange(e)}  />
                <span>Даю согласие на обработку персональных данных</span>
              <button disabled={!checked} className={styles.sendQuestion}>Отправить</button>
              </div>  
            </div>
          </form>
        </div>
      </div>
      <div className={styles.lowerFooter}>
        {" "}
        <span>
          ИП Коваленко Евгений Геннадьевич ИНН784215731801, адрес производства
          г. Санкт-Петербург 17-я линия В.О 66, пом. 2/07
        </span>
        <a href="#">Публичная оферта</a>
        <a href="#">Политика конфеденциальности</a>
      </div>
    </div>
  );
};
