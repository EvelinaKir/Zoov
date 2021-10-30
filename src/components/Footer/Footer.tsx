import styles from "./footer.module.css";
import whatsApp from "../../images/footer/whatsApp.svg";
import telegram from "../../images/footer/TelegramLogo.svg";
import React, { SyntheticEvent } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { modalSlice } from "../../services/reducers/modalReducers";
import { useAppDispatch } from "../../services/hooks";
import classNames from "classnames";

export const Footer = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const questionRef = useRef<HTMLTextAreaElement>(null)
  const {openSmallThanks, openError} = modalSlice.actions
const [checked, setChecked] = useState<boolean>(false)
const [email, setEmail] = useState<string>('')
const [name, setName] = useState<string>('')
const [question, setQuestion] = useState<string>('')
const dispatch = useAppDispatch()
const handleChange = (e: {target: HTMLInputElement}) => {
  setChecked(e.target.checked)
}

const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const sendQuestion = (e: any) => {
  e.preventDefault()
  if (validateEmail(email)) {
dispatch(openSmallThanks(true))
setEmail('')
setName('')
setQuestion('')}

  dispatch(openError(true))
}



  return (
    <div className={styles.mainBox} id={'contacts'}>
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
              <input ref={nameRef} type="text" placeholder="Имя" value={name} onChange={() => {nameRef.current ? setName(nameRef.current.value) : setName('')}} />
              <input ref={emailRef} type="email" placeholder="Email" value={email} onChange={() => {emailRef.current ? setEmail(emailRef.current.value) : setEmail('')}} />
            </div>
            <div className={styles.inputQestion} >
                <textarea ref={questionRef} value={question} placeholder='Ваш вопрос...'  onChange={() => {questionRef.current ? setQuestion(questionRef.current.value) : setQuestion('')}}/>
            </div>
            <div className={styles.inputReady}>
              <div className={styles.checkbox}>
                <div className={classNames(styles.checkbox, styles.checkboxMain)}>
                  <input id={'checkboxFooter'} type="checkbox" onChange={(e) => handleChange(e)} checked={checked}  />
                <label htmlFor="checkboxFooter">Даю согласие на обработку персональных данных</label>
                </div>
                
              <button disabled={!checked} onClick={(e) => sendQuestion(e)} className={styles.sendQuestion}>Отправить</button>
              </div>  
            </div>
          </form>
        </div>
      </div>
      <div className={styles.lowerFooter}>
        {" "}
        <span>
          ИП ****************, адрес производства
          *****************
        </span>
        <a href="#">Публичная оферта</a>
        <a href="#">Политика конфеденциальности</a>
      </div>
    </div>
  );
};
