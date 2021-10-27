import React from "react";
import { useAppSelector } from "../../services/hooks";
import styles from "./modalStyles.module.css";

export const ModalBigThanks = () => {
  const exact = useAppSelector((state) => state.modalReducer.fullDetailedInfo);
  return (
    <div className={styles.modalBigThanks}>
      <img src={exact?.image} alt="image of order" />
      <div className={styles.modalBigThanksText}>
        <h1>Спасибо!</h1>
        <h4>
          Ваш заказ оформлен и передан менеджеру. Мы свяжемся с вами для
          уточнения и подтверждения в ближайшее время.
        </h4>
        <h4>
          Если вы захотите дополнить свой заказ или уточнить какие-то детали –
          вы сможете это сделать у оператора.
        </h4>
      </div>
    </div>
  );
};
