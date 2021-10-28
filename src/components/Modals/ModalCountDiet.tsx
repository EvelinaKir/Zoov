import styles from "./modalStyles.module.css";
import { useState } from "react";
import { useAppDispatch } from "../../services/hooks";
import { modalSlice } from "../../services/reducers/modalReducers";
export const ModalCountDiet = () => {
  const dispatch = useAppDispatch();
  const { closeAll, openSmallThanks } = modalSlice.actions;
  const handleChange = (e: { target: HTMLInputElement }) => {
    setChecked(e.target.checked);
  };
  const [checked, setChecked] = useState<boolean>(false);
  const makeOrder = () => {
    dispatch(closeAll());
    dispatch(openSmallThanks(true));
  };

  return (
    <div className={styles.modalCountDiet}>
      <h1>Рассчет рациона</h1>
      <h2>
        Заполните информацию и мы свяжемся с вами, чтобы подсказать с подбором
        рациона для вашего хвостика. Или напишите нам в мессендерах{" "}
        <a>WhatsApp</a> и <a>Telegram</a>.
      </h2>
      <div className={styles.modalCountDiet__Inputs}>
        <form>
          <div className={styles.modalCountDiet__Inputs_radio}>
            <input
              id="dogAgeOld"
              name="dogAge"
              type="radio"
              value="Взрослая собака"
              checked
            />
            <label htmlFor="dogAgeOld">Взрослая собака</label>
          </div>
          <div className={styles.modalCountDiet__Inputs_radio}>
            <input id="dogAgeYoung" name="dogAge" type="radio" value="Щенок" />
            <label htmlFor="dogAgeYoung">Щенок</label>
          </div>
          <input required type="number" placeholder={"Вес (кг)"} />
          <input required type="number" placeholder={"Возраст"} />
          <input type="text" placeholder={"Ваше имя"} />
          <input
            required
            placeholder={"Телефон"}
            type="number"
          />
          <textarea
            placeholder={
              "Если у вашего хвостика есть особенности здоровья – напишите об этом..."
            }
            name="additionalInfo"
            cols={30}
            rows={10}
          ></textarea>
          <div className={styles.ModalCountDiet__checkbox}>
            <input
              id="checkboxAgree"
              type="checkbox"
              onChange={(e) => handleChange(e)}
              checked={checked}
            />
            <label htmlFor="checkboxAgree">
              Даю согласие на обработку персональных данных
            </label>
          </div>
          <button onClick={() => makeOrder()} disabled={!checked}>
            Расcчитать
          </button>
        </form>
      </div>
    </div>
  );
};
