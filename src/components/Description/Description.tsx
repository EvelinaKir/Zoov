import classNames from "classnames";
import styles from "./description.module.css";
import sniffingDog from "../../images/sniffingDog.png";
import React, { FunctionComponent } from "react";
import meatIcon from "../../images/meatIcon.svg";
import boneIcon from "../../images/boneIcon.svg";
import vegetablesIcon from "../../images/vegetablesIcon.svg";
import liverIcon from "../../images/liverIcon.svg";
import offalIcon from "../../images/offalIcon.svg";
import nutsIcon from "../../images/nutsIcon.svg";
import fruitIcon from "../../images/fruitIcon.svg";

export const Description = () => {
  return (
    <div className={classNames(styles.mainBox)} id={'BARF'}>
      <div className={classNames(styles.textDescription)}>
        <div className={classNames(styles.text)}>
          <span className={classNames(styles.title)}>Что такое BARF</span>
          <span className={classNames(styles.description)}>
            BARF (Biologically Appropriate Raw Food) — система питания собак,
            основанная на сырых натуральных продуктах. Такой рацион максимально
            приближен к естественному пищевому поведению хищников, а значит
            биологически правилен.{" "}
          </span>
          <span className={classNames(styles.plusListTitle)}>
            После перехода на питание по системе BARF у собак:
          </span>
          <div className={classNames(styles.plusList)}>
            <ul>
              <li>Нормализуется пищеварение</li>
              <li>Проходят аллергические реакции</li>
              <li>Прекращается образование зубного камня</li>
              <li>Появляется больше энергии</li>
              <li>Увеличивается продолжительность жизни</li>
            </ul>
          </div>
        </div>
        <div className={classNames(styles.image)}>
          <img src={sniffingDog} alt="god that sniffing meat" />
        </div>
      </div>
      <div className={classNames(styles.detailDescription)}>
        <div className={classNames(styles.detailAdults)}>
            <span className={classNames(styles.detailTitle)}>Для взрослых</span>
          <DetailedInfo
            meat={70}
            bones={10}
            vegetables={7}
            liver={5}
            Offal={5}
            nuts={2}
            fruits={1}
          />
        </div>
        <div className={classNames(styles.detailPuppies)}>
        <span className={classNames(styles.detailTitle)}>Для щенков</span>
          <DetailedInfo
            meat={58}
            bones={17}
            vegetables={7}
            liver={7}
            Offal={7}
            nuts={3}
            fruits={1}
          />
        </div>
      </div>
    </div>
  );
};

const DetailedInfo: FunctionComponent<{
  meat: number;
  bones: number;
  vegetables: number;
  liver: number;
  Offal: number;
  nuts: number;
  fruits: number;
}> = ({ meat, bones, vegetables, liver, Offal, nuts, fruits }) => {
  return (
    <div className={classNames(styles.detailInfo)}>
        <div className={classNames(styles.detailPoint)}>
          <img src={meatIcon} alt="icon of meat" />
          <span className={classNames(styles.foodType)}>Мясо – {meat}%</span>
        </div>
        <div className={classNames(styles.detailPoint)}>
          <img src={boneIcon} alt="icon of bones" />
          <span className={classNames(styles.foodType)}>Кости – {bones}%</span>
        </div>
        <div className={classNames(styles.detailPoint)}>
          <img src={vegetablesIcon} alt="icon of vegetables" />
          <span className={classNames(styles.foodType)}>
            Овощи – {vegetables}%
          </span>
        </div>
        <div className={classNames(styles.detailPoint)}>
          <img src={liverIcon} alt="icon of liver" />
          <span className={classNames(styles.foodType)}>Печень – {liver}%</span>
        </div>
        <div className={classNames(styles.detailPoint)}>
          <img src={offalIcon} alt="icon of Offal" />
          <span className={classNames(styles.foodType)}>
            Субпродукты – {Offal}%
          </span>
        </div>
        <div className={classNames(styles.detailPoint)}>
          <img src={nutsIcon} alt="icon of nuts" />
          <span className={classNames(styles.foodType)}>
            Семена/Орехи – {nuts}%{" "}
          </span>
        </div>
        <div className={classNames(styles.detailPoint)}>
          <img src={fruitIcon} alt="icon of fruits" />
          <span className={classNames(styles.foodType)}>
            Фрукты – {fruits}%
          </span>
        </div>
     
    </div>
  );
};
