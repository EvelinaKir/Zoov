import styles from './modalStyles.module.css'

export const ModalError = () => {
    return(
        <div className={styles.modalError}>
            <h1>Упс!</h1>
            <h2>Что-то пошло не так!</h2>
            <h3>Проверьте пожалуйста правильность введеных данных</h3>
        </div>
    )
}