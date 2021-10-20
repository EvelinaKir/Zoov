import classNames from 'classnames'
import {AppHeader} from '../AppHeader/AppHeader'
import {MainPage} from '../MainPage/MainPage'
import { Description } from '../Description/Description'
import styles from './appStyles.module.css'
export const App = () => {
    return (
        <div className={classNames(styles.mainBox)}>
            <MainPage/>
            <Description/>
        </div>
    )
}