import React, {useState} from "react";
import styles from "../Basket/Basket.module.css";
let keyGen='product'+localStorage.length
function clear(){
    localStorage.clear();
}

export const Basket =()=>{
    const value=localStorage.getItem('product')
    return (
        <div className={styles.container}>
            {value}
            <button onClick={clear}>
                Очистить
            </button>
        </div>
    )
}