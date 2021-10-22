import classNames from "classnames";
import styles from "./diets.module.css";
import React, { FunctionComponent } from "react";
import { foodList } from "../../utils/diets";

export const Diets = () => {
  return (
    <div className={classNames(styles.mainBox)}>
      <div className={classNames(styles.header)}>
        <span className={styles.mainHeader}>Рационы ZOOOV</span>
        <span className={styles.subHeader}>
          Система питания взрослой собаки не подойдет для щенка, поэтому мы
          создали разные по составу рационы ZOOOV. Вы сможете заказать
          полноценное питание исходя из возраста, веса и даже вкусовых
          предпочтений вашего друга. ZOOOV заботится о каждой собаке.
        </span>
      </div>
      <div className={classNames(styles.diets)}>
        <DietsFeed />
      </div>
      <div className={classNames(styles.count)}>
        <span className={styles.countText}>
          Рассчитаем в каком количестве нужно
          <br /> кормить вашего хвостика рационами Zooov
        </span>
        <button className={styles.countButton}>Расчитать</button>
      </div>
    </div>
  );
};

const DietsFeed = () => {
  const res = foodList.map((elem) => {
    return <Diet elem={elem} />;
  });
  return <div className={classNames(styles.dietsFeed)}>{res}</div>;
};

const Diet: FunctionComponent<{
  elem: {
    for: string;
    type: string;
    description: string;
    weight: string;
    image: string;
  };
}> = ({ elem }) => {
  return (
    <div className={styles.diet}>
      <img src={elem.image} alt="picture of food" />
      <span className={styles.dietFor}>{elem.for}</span>
      <span className={styles.dietType}>{elem.type}</span>
      <span className={styles.dietDescription}>{elem.description}</span>
      <span className={styles.dietWeight}>{elem.weight}</span>
      <button className={styles.orderButton}>Заказать</button>
    </div>
  );
};
