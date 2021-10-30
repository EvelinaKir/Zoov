import styles from './howToGetZoov.module.css'
import box from '../../images/howToGetZoov/Package.svg'
import phone from '../../images/howToGetZoov/PhoneCall.svg'
import clock from '../../images/howToGetZoov/Clock.svg'
import heart from '../../images/howToGetZoov/Vector.svg'
import arrow from '../../images/howToGetZoov/Arrow.svg'


export const HowToGetZoov = () => {
    return (
        <div className={styles.mainBox}> <div className={styles.mainBox} id={'delivery'}>
        <span className={styles.header}>Как получить ZOOOV?</span>
        <div className={styles.reasonsList}>
          <div className={styles.reason}>
              <div className={styles.images}>
             <img src={box} alt="icon of box" /> 
             <img src={arrow} alt="arrow" className={styles.arrow} />    
              </div>
            <span className={styles.reasonHeader}>Закажите рацион</span>{" "}
            <span className={styles.reasonText}>
            Выберите рацион для своей собаки. Если не знаете сколько
и какой – <a href="">мы подскажем</a> .
            </span>
          </div>
          <div className={styles.reason}>
          <div className={styles.images}>
          <img src={phone} alt="icon of phone" />
             <img src={arrow} alt="arrow" className={styles.arrow} />    
              </div>
            <span className={styles.reasonHeader}>Подтвердите заказ</span>{" "}
            <span className={styles.reasonText}>
            Мы свяжемся с вами для подтверждения заказа
и уточнения деталей.
            </span>
          </div>
          <div className={styles.reason}>
          <div className={styles.images}>
          <img src={clock} alt="icon of watch" />{" "}
             <img src={arrow} alt="arrow"  className={styles.arrow}/>    
              </div>
            <span className={styles.reasonHeader}>Ожидайте доставки</span>
            <span className={styles.reasonText}>
            Привозим заказ на следующий день. По СПб – 350₽, при заказе от 3 500₽ – бесплатно. Лен. область – по договоренности.
            </span>
          </div>
          <div className={styles.reason}>
          <div className={styles.images}>
          <img src={heart} alt="icon of heart" />
              </div>
            <span className={styles.reasonHeader}>Радуйте своего питомца</span>{" "}
            <span className={styles.reasonText}>
            Просто разморозьте рацион: при комнатной температуре – 3 часа, в холодильнике – 12-15 часов.
            </span>
          </div>
        </div>
      </div></div>
    )
}