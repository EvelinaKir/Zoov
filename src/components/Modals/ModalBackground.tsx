import React, { FunctionComponent } from "react"
import styles from './modalStyles.module.css'
import { useAppDispatch } from "../../services/hooks"
import { modalSlice } from "../../services/reducers/modalReducers";

export const ModalBackground: FunctionComponent<{children: JSX.Element}> = ({children}) => {
    const dispatch = useAppDispatch()
const closeAll = modalSlice.actions.closeAll
    return (
        <div className={styles.ModalBackground}>{children}</div>
    )
}