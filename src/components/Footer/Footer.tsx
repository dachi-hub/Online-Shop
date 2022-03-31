import styles from "../Footer/Footer.module.css";

export const Footer=()=>{
    return(
        <footer>
            <div className={styles.container}>
                <div className={styles.payment}>
                    <img src="https://www.manandvanbridport.co.uk/wp-content/uploads/2019/06/worldpay.png" alt="cards"/>
                </div>
            </div>
        </footer>
    )
}