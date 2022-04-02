import React from 'react';
import styles from "../Main/Main.module.css";
import {NavLink} from "react-router-dom";
import {Slider} from "./Slider";
import {Ssd} from "../Products/Ssd";


    export const Main=()=>{
        return(
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.block}>
                        <Slider/>
                    </div>
                    <div className={styles.rec}>
                        <h2 className={styles.title}>Ускорьте свой копьютер</h2>
                        <Ssd/>
                    </div>
                </div>
            </div>
    )
}