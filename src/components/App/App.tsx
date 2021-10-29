import classNames from "classnames";
import { AppHeader } from "../AppHeader/AppHeader";
import { MainPage } from "../MainPage/MainPage";
import { Description } from "../Description/Description";
import { Diets } from "../Diets/Diets";
import styles from "./appStyles.module.css";
import { WhyZoov } from "../WhyZoov/WhyZoov";
import { CareAndLove } from "../CareAndLove/CareAndLove";
import { HowToGetZoov } from "../HowToGetZoov/HowToGetZoov";
import { Questions } from "../Questions/Questions";
import { Footer } from "../Footer/Footer";
import { SyntheticEvent, useRef, useState } from "react";
import { useEffect } from "react";
import { MainModal } from "../Modals/MainModal";
import { useAppSelector } from "../../services/hooks";
import { ModalDescription } from "../Modals/ModalDescription";
import { ModalOrder } from "../Modals/ModalOrder";
import { ModalBigThanks } from "../Modals/ModalBigThanks";
import { ModalCountDiet } from "../Modals/ModalCountDiet";
import { ModalSmallThanks } from "../Modals/ModalSmallThanks";
import { ModalError } from "../Modals/ModalError";
import { HashLink as Link } from 'react-router-hash-link';


export const App = () => {
  const mainRef = useRef<any>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const handleScroll = () => {
    if (window.pageYOffset >= mainRef.current?.childNodes[0].offsetHeight - 10) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const { smallThanks, bigThanks, description, order, countDiet, error } =
    useAppSelector((state) => state.modalReducer);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      handleScroll();
    });
  }, []);

  return (
    <div className={classNames(styles.mainBox)} ref={mainRef}>
      <MainPage showMenu={visible} />
      <div className={visible ? styles.visible : styles.none}>
        <div>
          <AppHeader moveable={true} />
        </div>
      </div>
      <Description />
      <Diets />
      <WhyZoov />
      <CareAndLove />
      <HowToGetZoov />
      <Questions />
      <Footer />
      {description && (
        <MainModal>
          <ModalDescription />
        </MainModal>
      )}
      {order && (
        <MainModal>
          <ModalOrder />
        </MainModal>
      )}
      {bigThanks && (
        <MainModal>
          <ModalBigThanks />
        </MainModal>
      )}
      {countDiet && (
        <MainModal>
          <ModalCountDiet />
        </MainModal>
      )}
      {smallThanks && (
        <MainModal>
          <ModalSmallThanks />
        </MainModal>
      )}
      {error && (
        <MainModal>
          <ModalError />
        </MainModal>
      )}
    </div>
  );
};
