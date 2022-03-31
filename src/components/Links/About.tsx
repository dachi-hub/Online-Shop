import styles from "../Links/About.module.css";

export const About=()=>{
    // @ts-ignore
    return(
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>О компании</h2>
                </div>
                <hr/>
                <div className={styles.text_block}>
                    <img className={styles.text_block_img} src="https://kamala-soft.com/upload/medialibrary/20b/20b151cbf91ef8724e4c73b10f7c2606.png"/>
                    <div className={styles.text}>
                        <h3>
                            GameZone-
                        </h3>
                        <p>
                            это белорусский интернет-магазин с ассортиментом товара,
                            превышающим 170.000 наименований! Мы помогли большому количеству клиентов совершить выгодные покупки, не выходя из дома.
                            Нашими услугами воспользовались множество организаций, среди которых такие известные белорусские компании, как Mark Formelle, Ericsson, Ticketpro,
                            Onliner.by, Банк "Москва-Минск", Белорусская железная
                            дорога и другие организации.
                        </p>
                    </div>
                </div>
                <hr/>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img className={styles.card_img} src="https://cdnn.1prime.ru/images/83160/69/831606951.jpg"/>
                        <h5>Покупать просто</h5>
                        <p>Все товары, представленные в нашем каталоге, распределены по категориям и имеют подробное описание с фотографиями, соответствующими действительности.</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_img} src="https://billiard-s.com/~images/zakaz_info.jpg"/>
                        <h5>Быстрый заказ</h5>
                        <p>Оформить заказ, а также получить консультацию любым удобным вам способом (через сайт / по телефону / Skype / Viber / LiveTex) можно ежедневно с 8-00 до 22-00.</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_img} src="https://techwb.ru/wp-content/uploads/2019/06/servisnoe-obsluzhivanie-1.png"/>
                        <h5>Сервисное обслуживание и гарантия качества</h5>
                        <p>Мы предоставляем гарантийные сроки на товары в соответствии с законодательством РБ. Наша компания предоставляет услуги собственного сервисного центра, куда вы можете обратиться по любым вопросам гарантийного и послепродажного обслуживания.</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7yWs2-RNg0lJtoLRPf9QXIXlQUTMCqCatg&usqp=CAU"/>
                        <h5>Экономия и актуальность</h5>
                        <p>На нашем сайте вы можете приобрести товар по самым привлекательным ценам. Для вашего удобства каталог товаров обновляется несколько раз в день.</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_img} src="https://bmwguide.ru/wp-content/uploads/2022/01/c49e5a1571ce20b285fe44e329a53191.jpg"/>
                        <h5>Оперативная доставка</h5>
                        <p>Наш курьер доставит вам товар в установленное время. Доставки по Беларуси с 8-00 до 22-00 без выходных.</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZizV8QkV3ioVMvhfOkv8en_rDKpo81tqwrg&usqp=CAU"/>
                        <h5>Удобная оплата и скидки</h5>
                        <p>Оплата возможна наличным и безналичным расчетом, через курьера, а также в почтовом отделении при получении экспресс-посылки. Для постоянных клиентов предусмотрена система скидок.</p>
                    </div>
                </div>
            </div>
    )
}