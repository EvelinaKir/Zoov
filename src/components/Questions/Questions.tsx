import styles from "./questions.module.css";
import React, { FunctionComponent } from "react";
import { useState } from "react";
import minus from "../../images/questions/minus.svg";
import plus from "../../images/questions/plus.svg";
export const Questions = () => {
  return (
    <div className={styles.mainBox} id={'FAQ'}>
      <div className={styles.title}>
        <span>Частые вопросы</span>
      </div>
      <div className={styles.container}>
        <Question
          question={"Не опасны ли бактерии, которые находятся в сыром мясе?"}
          answer={
            "У здоровых собак отличная иммунная система, готовая ко всем видам бактерий. Рацион BARF как раз укрепит иммунитет вашей собаки и защитит ее от влияния бактерий, которые находятся на улице или даже в вашем доме."
          }
        />
        <Question
          question={"Надо ли давать дополнительно витамины к рациону BARF?"}
          answer={
            "Давать витаминно–минеральные добавки нужно курсом. На рационе из натуральных продуктов схема такая: месяц собака получает добавку и на месяц делают перерыв. Если животное ест готовый корм, поливитамины дают 2–4 раза в год курсами по 30 дней."
          }
        />
        <Question
          question={
            "А если моя собака уже давно питается промышленным кормом и у нее нет проблем со здоровьем?"
          }
          answer={
            "В готовых кормах содержание витаминов рассчитано на средние показатели, поэтому их может быть недостаточно для конкретного питомца."
          }
        />
        <Question
          question={
            "Можно ли смешивать натуральный корм и корм промышленного производства?"
          }
          answer={
            "Если вы не обладаете достаточными знаниями в области ветеринарной диетологии, и у вас нет времени покупать множество разных продуктов, необходимых для составление натурального рациона, а потом тщательно высчитывать их соотношение, то лучше выбрать качественный сухой корм. Вашим питомцам это точно принесёт только пользу."
          }
        />
        <Question
          question={
            "Могу ли я сам составить для своей собаки рацион по системе BARF?"
          }
          answer={
            "Профессиональные барфисты подчеркивают, что рацион для каждой конкретной собаки должен подбираться индивидуально опытным путем."
          }
        />
        <Question
          question={"Присутствует ли в ZOOOV рационах рыба?"}
          answer={
            "Система кормления БАРФ — диета для собак и кошек состоящая только из сырых продуктов. 60-70% рациона, это мясо, рыба и субпродукты. Оставшиеся 30-40% — это овощи, фрукты и яйца."
          }
        />
        <Question
          question={"Как перевести питомца на натуральное питание?"}
          answer={
            "При переводе питомца на новое питание, смешайте в первый день новый и старый сухой корм в пропорции примерно 20% на 80%. На следующий день увеличьте долю нового рациона до 40%. Продолжайте в течение 5 дней, пока новое питание полностью не заменит предыдущее."
          }
        />
        <Question
          question={"Как готовить рацион ZOOOV?"}
          answer={
            "Достаточно разморозить порцию ZOOOV,  удалить отрывную крышку с лотка и обед для вашего питомца готов."
          }
        />
        <Question
          question={
            "При переходе на рацион ZOOOV у собаки начались проблемы с ЖКТ. Это нормально?"
          }
          answer={
            "Запоры у собак — одна из проблем, с которыми сталкиваются владельцы, которые переводят любимцев на биологически соответствующее питание. Но как показывает практика, собаки не страдают запорами на здоровом рационе. Наоборот, натуральная пища положительно влияет на пищеварение собак. Из-за этих изменений меняется стул: количество заметно уменьшается, стул становится менее пахучим. Такие перемены вызывают беспокойство владельцев, но на самом деле с вашим питомцем всё в порядке"
          }
        />
      </div>
    </div>
  );
};

const Question: FunctionComponent<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [state, setState] = useState(false);
  const open = () => {
    setState(!state);
  };
  return (
    <div onClick={() => open()} className={styles.questionContainer}>
      <div className={styles.question}>
        <span>{question}</span>
              <img src={state ? minus : plus} alt="wrap icon +" />
      </div>
      <div className={styles.answer}><span>{state ? answer : null}</span></div>
    </div>
  );
};
