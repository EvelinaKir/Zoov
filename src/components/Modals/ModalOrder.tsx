import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { modalSlice } from "../../services/reducers/modalReducers";
import styles from "./modalStyles.module.css";

export const ModalOrder = () => {
  const dispatch = useAppDispatch()
  const {closeAll, openBigThanks} = modalSlice.actions
  const info = useAppSelector((state) => state.modalReducer.fullDetailedInfo);
  const [counter, setCounter] = useState<number>(1);
  const [checked, setChecked] = useState<boolean>(false)
  const [selectValue, setSelectValue] = useState<string>('100г')
  const handleChange = (e: {target: HTMLInputElement}) => {
    setChecked(e.target.checked)
  }
  const makeOrder = () => {
    dispatch(closeAll())
    dispatch(openBigThanks(true))
  }

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value)
  }
  if (info) {
    return (
      <div className={styles.modalOrder}>
        <div className={styles.modalOrderImage}>
          <img src={info.image} alt="image of food" />
        </div>
        <div className={styles.modalOrderOrderInfo}>
          <h1>{info.for}</h1>
          <h6>{info.type}</h6>
          <form>
            <div className={styles.userInfo}>
              <input type="text" placeholder={"Имя"} />
              <input type="text" placeholder={"Телефон"} />
              <input type="text" placeholder={"Адрес"} />
            </div>

            <select name="wight selector" value={selectValue} onChange={(e) => selectChange(e)}>
              <option className={styles.option} value="700г">
                700г
              </option>
              <option className={styles.option} value="500г">
                500г
              </option>
              <option className={styles.option} value="300г">
                300г
              </option>
              <option className={styles.option} value="150г">
                150г
              </option>
              <option className={styles.option} value="100г">
                100г
              </option>
            </select>
            <div className={styles.counter}>
              <span className={styles.counterText}>Количество:</span>
              <div className={styles.counterButtons}>
                <div
                  className={styles.countButton}
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </div>
                <input type="number" min={1} value={counter} />
                <div
                  className={styles.countButton}
                  onClick={() =>
                    counter >= 2 ? setCounter(counter - 1) : setCounter(1)
                  }
                >
                  -
                </div>
              </div>
            </div>
            <div className={styles.checkbox}>
            <input id={'checkboxOrder'} type="checkbox" onChange={(e) => handleChange(e)} checked={checked} />
            <label htmlFor="checkboxOrder">Даю согласие на обработку персональных данных</label>
            </div>
            <div className={styles.orderButton}>
            <span>{`${info.price! * counter}₽`}</span><button onClick={() => makeOrder()} disabled={!checked}>Оформить заказ</button>
            </div>
          </form>
        </div>
      </div>
    );
  } else return null;
};
