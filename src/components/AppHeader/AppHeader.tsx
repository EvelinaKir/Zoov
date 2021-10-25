import classNames from "classnames";
import AppHeaderStyles from "./AppHeaderStyles.module.css";
import icon from "../../images/icon.png";
import React, {FunctionComponent} from "react";
export const AppHeader: FunctionComponent<{moveable: boolean}>  = ({moveable}) => {
  const style = moveable ? AppHeaderStyles.moveableBox : AppHeaderStyles.mainBox
  const navBarStyle = moveable ? AppHeaderStyles.moveableNavBar : AppHeaderStyles.navBar
  const logoStyle = moveable ? AppHeaderStyles.movableLogo : AppHeaderStyles.logo
  return (
    <div className={classNames(style)}>
      <div className={classNames(logoStyle)}>
        <img src={icon} alt="icon of dog with smile" />
      </div>
      <div className={classNames(navBarStyle)}>
        <div>
          <a
            className={classNames(
              AppHeaderStyles.points
            )}
            href="#"
          >
            BARF
          </a>
        </div>
        <div>
          <a
            className={classNames(
              AppHeaderStyles.points
            )}
            href="#"
          >
            Рационы
          </a>
        </div>
        <div>
          <a
            className={classNames(
              AppHeaderStyles.points
            )}
            href="#"
          >
            ZOOOV
          </a>
        </div>
        <div>
          <a
            className={classNames(
              AppHeaderStyles.points
            )}
            href="#"
          >
            О нас
          </a>
        </div>
        <div>
          <a
            className={classNames(
              AppHeaderStyles.points
            )}
            href="#"
          >
            Доставка
          </a>
        </div>
        <div>
          <a
            className={classNames(
              AppHeaderStyles.points
            )}
            href="#"
          >
            FAQ
          </a>
        </div>
        <div>
          <a
            className={classNames(
              AppHeaderStyles.points
            )}
            href="#"
          >
            Контакты
          </a>
        </div>
      </div>
    </div>
  );
};
