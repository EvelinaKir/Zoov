import ReactDom from "react-dom";
import React, { FunctionComponent } from "react";
import esc from "../../images/modals/esc.svg";
import styles from "./modalStyles.module.css";
import { ModalBackground } from "./ModalBackground";
import { useAppSelector } from "../../services/hooks";
import { useAppDispatch } from "../../services/hooks";
import { modalSlice } from "../../services/reducers/modalReducers";
import { useEffect, useCallback } from "react";


export const MainModal: FunctionComponent<{children: React.ReactNode}> = ({
  children,
}) => {
    const dispatch = useAppDispatch()
    const closeAll = modalSlice.actions.closeAll
  const modalRoot: HTMLElement | null = document.getElementById("modal-root")!;
  const closeModal = () => {
    dispatch(closeAll())
  };

  const escapeClosed = useCallback((e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", escapeClosed);
    return () => {
      window.removeEventListener("keydown", escapeClosed);
    };
  }, []);

  return ReactDom.createPortal(
    <>
    <ModalBackground>
      <div className={styles.mainBox}>
        <img src={esc} alt="escape button" onClick={closeModal} className={styles.esc}/>
        <div className={styles.content}>{children}</div>
      </div>
    </ModalBackground>
    </>,
    modalRoot
  );
};
