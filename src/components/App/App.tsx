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
import { SyntheticEvent, useRef, useState } from 'react'
import { useEffect } from "react";

export const App = () => {
const mainRef = useRef<any>(null)
const [visible, setVisible] = useState<boolean>(false)
const handleScroll = (e: any) => {
  if(window.pageYOffset > mainRef.current?.childNodes[0].offsetHeight) {
    setVisible(!visible)
  }
  else {
      setVisible(visible)
  }

  console.log(mainRef.current?.childNodes[0].offsetHeight)
}

useEffect(() => {
document.addEventListener('scroll', (e) => {handleScroll(e)})
},[])
    return (
        <div className={classNames(styles.mainBox)} ref={mainRef}>
            <MainPage/>
            <div className={visible ? styles.visible : styles.none}>
            <AppHeader moveable={true}/>    
            </div>
            
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