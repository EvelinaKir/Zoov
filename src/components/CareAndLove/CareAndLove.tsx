import styles from "./careAndLove.module.css";
import dog1 from "../../images/careAndLove/Rectangle 19.png";
import dog2 from "../../images/careAndLove/Rectangle 21.png";
import dogImage from "../../images/careAndLove/dogImage.png";
import heartImage from "../../images/careAndLove/heartImage.png";

export const CareAndLove = () => {
  return (
    <div className={styles.mainBox} id={'AboutUs'}>
      <div className={styles.images}>
        <img className={styles.dog1} src={dog1} alt="dog with food" />
        <img className={styles.dog2} src={dog2} alt="two dogs with food" />
        <img className={styles.dogImage} src={dogImage} alt="image of dog" />
        <img
          className={styles.heartImage}
          src={heartImage}
          alt="image of heart"
        />
      </div>
      <div className={styles.text}>
        <span className={styles.textHeader}>С заботой и любовью от Zooov</span>
        <div className={styles.textContent}>
          <span>
            {" "}
            Мы сами владельцы собак и знаем, как важно правильное и качественное
            питание для долгой и счастливой жизни вашего питомца. Для нас ZOOOV
            это не просто бизнес, это наш вклад в повышение качества жизни всех
            собак.
          </span>
          <span>
            Мы знаем, как правильно подобрать и переработать мясо, субпродукты,
            овощи и фрукты, чтобы питание вашего питомца было максимально
            сбалансированным и полезным.
          </span>
          <span>
            Обычного сырого мяса из магазина будет недостаточно для полноценного
            питания собаки. ZOOOV — экономия времени, вам не придется искать
            необходимые составляющие для рациона.
          </span>
          <span>
            Мы сами отбираем мясо, кости, легкие, печень и другие говяжьи,
            кроличьи и птичьи субпродукты у проверенных поставщиков. Закупаем
            органические овощи и используем разнообразные масла, такие как
            конопляное и льняное.
          </span>
          <span>
            ZOOOV — это удобно, мы доставляем готовый рацион на две недели уже
            смешанным, расфасованным и упакованным в порционные лотки,готовыми к
            заморозке. За два часа до кормления достаточно переместить контейнер
            из морозилки в холодильник для ПРАВИЛЬНОЙ разморозки.
          </span>
        </div>
      </div>
    </div>
  );
};
