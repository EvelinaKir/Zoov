import classNames from "classnames";
import styles from "./diets.module.css";
import React, { FunctionComponent } from "react";
import { foodList } from "../../utils/diets";
import { useAppSelector } from "../../services/hooks";
import { useAppDispatch } from "../../services/hooks";
import { modalSlice } from "../../services/reducers/modalReducers";
import { TDetailedFoodInfo } from "../../services/types/types";
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
  const res = foodList.map((elem, i) => {
    return <Diet elem={elem} key={i} />;
  });
  return <div className={classNames(styles.dietsFeed)}>{res}</div>;
};

const Diet: FunctionComponent<{
  elem: TDetailedFoodInfo;
}> = ({ elem }) => {
  const order = modalSlice.actions.openOrder
const {writeDetail} = modalSlice.actions
  const {openDescription} = modalSlice.actions;
  const dispatch = useAppDispatch()
  const openModalInfo = () => {
    dispatch(writeDetail(elem))
    dispatch(openDescription(true))
  }
const openModalorder = () => {
  dispatch(writeDetail(elem))
  dispatch(order(true))
}
  return (
    <div className={styles.diet}>
      <img src={elem.image} alt="picture of food" onClick={() => openModalInfo()} />
      <span className={styles.dietFor}>{elem.for}</span>
      <span className={styles.dietType}>{elem.type}</span>
      <span className={styles.dietDescription}>{elem.description}</span>
      <span className={styles.dietWeight}>{elem.weight}</span>
      <button onClick={() => openModalorder()} className={styles.orderButton}>Заказать</button>
    </div>
  );
};
