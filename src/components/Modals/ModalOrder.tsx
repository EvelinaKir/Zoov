import { useState } from "react";
import { useAppSelector } from "../../services/hooks";
import styles from "./modalStyles.module.css";

export const ModalOrder = () => {
  const info = useAppSelector((state) => state.modalReducer.fullDetailedInfo);
  const [counter, setCounter] = useState<number>(1);
  const [checked, setChecked] = useState<boolean>(false)
  const handleChange = (e: {target: HTMLInputElement}) => {
    setChecked(e.target.checked)
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

            <select name="wight selector">
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
              <option className={styles.option} value="100г" selected>
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
            <input type="checkbox" onChange={(e) => handleChange(e)} checked={checked} />
            <span>Даю согласие на обработку персональных данных</span>
            </div>
            <div className={styles.orderButton}>
            <span>{`${info.price}₽`}</span><button disabled={!checked}>Оформить заказ</button>
            </div>
          </form>
        </div>
      </div>
    );
  } else return null;
};
