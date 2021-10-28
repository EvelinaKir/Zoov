import styles from "./whyZoov.module.css";
import leaf from "../../images/reasonsIcons/Leaf.svg";
import heart from "../../images/reasonsIcons/Heartbeat.svg";
import paw from "../../images/reasonsIcons/PawPrint.svg";
import smiley from "../../images/reasonsIcons/Smiley.svg";

export const WhyZoov = () => {
  return (
    <div className={styles.mainBox} id={'zooov'}>
      <span className={styles.header}>Почему ZOOOV</span>
      <div className={styles.reasonsList}>
        <div className={styles.reason}>
          <img src={leaf} alt="icon of leaf" />
          <span className={styles.reasonHeader}>Натурально</span>{" "}
          <span className={styles.reasonText}>
            Все продукты тщательно отбираем у проверенных поставщиков.
          </span>
        </div>
        <div className={styles.reason}>
          <img src={heart} alt="icon of heart" />
          <span className={styles.reasonHeader}>Здорово</span>{" "}
          <span className={styles.reasonText}>
            Система питания, которая продлевает жизнь вашего хвостика.
          </span>
        </div>
        <div className={styles.reason}>
          <img src={paw} alt="icon of paw print" />{" "}
          <span className={styles.reasonHeader}>Сбалансированно</span>
          <span className={styles.reasonText}>
            Сделайте заказ на сайте и с вами свяжется наш менеджер для уточнения
            деталей.
          </span>
        </div>
        <div className={styles.reason}>
          <img src={smiley} alt="icon of smiley" />
          <span className={styles.reasonHeader}>Удобно</span>{" "}
          <span className={styles.reasonText}>
            Достаточно разморозить порцию ZOOOV, удалить отрывную крышку с лотка
            и обед для вашего питомца готов.
          </span>
        </div>
      </div>
    </div>
  );
};
