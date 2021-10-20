import classNames from "classnames";
import { AppHeader } from "../AppHeader/AppHeader";
import mainPageStyles from "./mainPage.module.css";
import React, { FunctionComponent } from "react";

export const MainPage = () => {
  return (
    <div className={classNames(mainPageStyles.box)}>
      <div><AppHeader moveable={false} /></div>
      <div className={classNames(mainPageStyles.info)}>
        <span className={classNames(mainPageStyles.title)}>
          Питание,<br/> которое полюбит<br/> ваш хвостик
        </span>
        <span className={classNames(mainPageStyles.subTitle)}>
          Натуральные рационы питания<br/> для собак по системе BARF
        </span>
        <button className={mainPageStyles.button}>Выбрать рацион</button>
      </div>
    </div>
  );
};
