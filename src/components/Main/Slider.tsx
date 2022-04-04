import {NavLink} from "react-router-dom";
import styles from "../Main/Slider.module.css";
import React, {useState, useEffect} from "react"

const img = [
    <NavLink to='/cpu'>
        <img  src='https://www.fairfaxcorner.com/media/v1/140/2020/01/Copy-of-logos_600x600-12.png' style={{width:"600px"}}/>
    </NavLink>,
    <NavLink to='/ram'>
        <img src="https://gaming4.cash/wp-content/uploads/2019/03/hyperx-logo-lrg.png" style={{width:"590px"}}/>
    </NavLink>,
    <NavLink to='/gpu'>
        <img  src="http://toplogos.ru/images/logo-palit.png" style={{width:"600px"}}/>
    </NavLink>
]

export const Slider=()=>{
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const res = current === img.length - 1 ? 0 : current + 1
                return res
            })
        }, 5000)
        return () => clearInterval(interval)
    }, [])
    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
    return(
        <div className={styles.container}>
            <div className={styles.slider}>
                <div className={styles.slider_img_slider_img_prev}
                     key={prevImgIndex}>
                    {img[prevImgIndex]}
                </div>
                <div className={styles.slider_img}
                     key={activeIndex}>
                    {img[activeIndex]}
                </div>
                <div className={styles.slider_img_slider_img_next}
                     key={nextImgIndex}>
                    {img[nextImgIndex]}
                </div>
            </div>
        </div>
    )
}

