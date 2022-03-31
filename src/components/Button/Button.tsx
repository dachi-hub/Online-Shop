import styles from "../Button/Button.module.css";
export const Button=()=>{{

    return(
        <div className={styles.wrap}>
            <button className={styles.btn}>В корзину</button>
        </div>
    )
}}