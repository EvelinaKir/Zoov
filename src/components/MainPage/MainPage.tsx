import classNames from "classnames";
import { AppHeader } from "../AppHeader/AppHeader";
import mainPageStyles from "./mainPage.module.css";
import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

export const MainPage = () => {
  return (
    <div className={classNames(mainPageStyles.box)} id={'mainPage'}>
     <div>
       <AppHeader moveable={false} />
       </div>
      <div className={classNames(mainPageStyles.info)}>
        <span className={classNames(mainPageStyles.title)}>
          Питание,<br/> которое полюбит<br/> ваш хвостик
        </span>
        <span className={classNames(mainPageStyles.subTitle)}>
          Натуральные рационы питания<br/> для собак по системе BARF
        </span>
        <Link smooth to={'#diets'}>
          <button className={mainPageStyles.button}>Выбрать рацион</button>
        </Link>
        
      </div>
    </div>
  );
};
