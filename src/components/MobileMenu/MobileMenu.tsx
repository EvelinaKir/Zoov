import styles from "./mobileMenu.module.css";
import { FunctionComponent } from "react";
import classNames from "classnames";
import { HashLink as Link } from "react-router-hash-link";

export const MobileMenu: FunctionComponent<{ movable: boolean }> = ({
  movable,
}) => {
  return (
    <div
      className={classNames(movable ? styles.movable : null, styles.menuToggle)}
    >
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul className={styles.menu}>
        <li>
          <Link to={"#BARF"} href="#">
            BARF
          </Link>
        </li>
        <li>
          <Link to={"#diets"} href="#">
            Рационы
          </Link>
        </li>
        <li>
          <Link to={"#zooov"} href="#">
            ZOOOV
          </Link>
        </li>
        <li>
          <Link to={"#AboutUs"} href="#">
            О нас
          </Link>
        </li>
        <li>
          <Link to={"#delivery"} href="#">
            Доставка
          </Link>
        </li>
        <li>
          <Link to={"#FAQ"} href="#">
            FAQ
          </Link>
        </li>
        <li>
          <Link to={"#contacts"} href="#">
            Контакты
          </Link>
        </li>
        <li>
          <Link to={"#diets"}>
            <button>Выбрать рацион</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
