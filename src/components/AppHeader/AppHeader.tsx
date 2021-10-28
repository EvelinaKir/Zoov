import classNames from "classnames";
import AppHeaderStyles from "./AppHeaderStyles.module.css";
import icon from "../../images/icon.png";
import React, {FunctionComponent} from "react";
import { HashLink as Link } from 'react-router-hash-link';


export const AppHeader: FunctionComponent<{moveable: boolean}>  = ({moveable}) => {
  const style = moveable ? AppHeaderStyles.moveableBox : AppHeaderStyles.mainBox
  const navBarStyle = moveable ? AppHeaderStyles.moveableNavBar : AppHeaderStyles.navBar
  const logoStyle = moveable ? AppHeaderStyles.movableLogo : AppHeaderStyles.logo

  return (
    <div className={classNames(style)}>

        <Link smooth to={'#mainPage'}><img className={logoStyle} src={icon} alt="icon of dog with smile" /></Link>

      <div className={classNames(navBarStyle)}>
        <div>
          <Link smooth
            className={classNames(
              AppHeaderStyles.points
            )}
            to={'#BARF'}
          >
            BARF
          </Link>
        </div>
        <div>
          <Link smooth
            className={classNames(
              AppHeaderStyles.points
            )}
            to={'#diets'}
          >
            Рационы
          </Link>
        </div>
        <div>
          <Link smooth
            className={classNames(
              AppHeaderStyles.points
            )}
            to={'#zooov'}
          >
            ZOOOV
          </Link>
        </div>
        <div>
          <Link smooth
            className={classNames(
              AppHeaderStyles.points
            )}
            to={'#AboutUs'}
          >
            О нас
          </Link>
        </div>
        <div>
          <Link smooth
            className={classNames(
              AppHeaderStyles.points
            )}
            to={'#delivery'}
          >
            Доставка
          </Link>
        </div>
        <div>
          <Link smooth
            className={classNames(
              AppHeaderStyles.points
            )}
            to={'#FAQ'}
          >
            FAQ
          </Link>
        </div>
        <div>
          <Link smooth
            className={classNames(
              AppHeaderStyles.points
            )}
            to={'#contacts'}
          >
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
};
