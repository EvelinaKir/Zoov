import classNames from 'classnames'
import {AppHeader} from '../AppHeader/AppHeader'
import {MainPage} from '../MainPage/MainPage'
import { Description } from '../Description/Description'
import {Diets} from '../Diets/Diets'
import styles from './appStyles.module.css'
import {WhyZoov} from '../WhyZoov/WhyZoov'
import {CareAndLove} from '../CareAndLove/CareAndLove'
import {HowToGetZoov} from '../HowToGetZoov/HowToGetZoov'
import {Questions} from '../Questions/Questions'
import { Footer } from '../Footer/Footer'
export const App = () => {
    return (
        <div className={classNames(styles.mainBox)}>
            <MainPage/>
            <Description/>
            <Diets/>
            <WhyZoov/>
            <CareAndLove/>
            <HowToGetZoov/>
            <Questions/>
            <Footer/>
        </div>
    )
}