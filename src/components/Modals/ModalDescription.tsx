import styles from './modalStyles.module.css'
import { useAppDispatch, useAppSelector } from '../../services/hooks'
import { modalSlice } from '../../services/reducers/modalReducers'

export const ModalDescription = () => {
    
    const elem = useAppSelector(state => state.modalReducer.fullDetailedInfo)
    const exact = useAppSelector(state => state.modalReducer.fullDetailedInfo?.additionalList)
    const dispatch = useAppDispatch()
    const {closeAll, openOrder} = modalSlice.actions

    const handleModal = () => {
        dispatch(closeAll())
        dispatch(openOrder(true))
    }
    if (elem) {
    const right = exact!.map((elem, i) => {
    return (<img src={elem.addImage} alt="small image" key={i}/>)
    })
    return(
        <div className={styles.modalDescription}>
            <div className={styles.modalDescriptionImages}>
            <div className={styles.modalDescriptionMainImage}><img src={elem.image} alt="image of food" /></div>
            <div className={styles.modalDescriptionAdditionalImages}>
                {right}
            </div>
            </div>
            <div className={styles.modalDescriptionInfo}>
                <h1>{elem.for}</h1>
                <h6>{elem.type}</h6>
                <div className={styles.modalDescriptionDetails}>
                    <span>{elem.description}</span>
                </div>
                <h6>{elem.weight}</h6>
                <button onClick={() => handleModal()}>Заказать</button>
            </div>
        </div>
    )}
    else return null
}
