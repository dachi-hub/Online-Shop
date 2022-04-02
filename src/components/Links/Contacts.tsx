import styles from "../Links/Contacts.module.css";

export const Contacts=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Контакты</h2>
            </div>
            <div className={styles.block}>
                <div className={styles.text_block}>
                    <h5>Связаться с нами</h5>
                    <hr className={styles.hr}/>
                    <p>
                        МТС (33), life : ) (25), A1 (29)<br/>
                        681-88-77 (многоканальный)
                    </p>
                    <p>
                        Городской: +375 (17) 363-20-65 (многоканальный)
                    </p>
                    <p>Отдел послепродажного обслуживания: +375 (29) 993-73-35</p>
                </div>
                <div className={styles.text_block}>
                    <h5>Email</h5>
                    <hr className={styles.hr}/>
                    <p>
                        E-mail: <a href="mailto:info@gamezone.by">info@gamezone.by</a>
                    </p>
                    <p>
                        E-mail для ценовых предложений (поставщикам):<a href="mailto:price@gamezone.by">price@gamezone.by</a>
                    </p>
                    <p>
                        E-mail для заказов: <a href="mailto:opt@gamezone.by">opt@gamezone.by</a>
                    </p>
                </div>
            </div>
        </div>
    )
}