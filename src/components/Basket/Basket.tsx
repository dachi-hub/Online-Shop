import { useDispatch, useSelector } from "react-redux";
import {clear} from "../../redux/actions/cartActions";
import styles from "../Basket/Basket.module.css";

export const Basket = () => {
    const items = useSelector((state: any) => state.cartReducer.items);
    const dispatch = useDispatch();

    const clearAll = () => {
        dispatch(clear());
    };

    return (
        <div className={styles.container}>
                {items.map((item: any) => (
                    <div className={styles.wrapper}>
                        <div className={styles.productCard}>
                            <div className={styles.imgDiv}>
                                <img src={item.img} className={styles.img}/>
                            </div>
                            <div className={styles.productDescription}>
                                <h3>{item.name} {item.model}</h3>
                                <p> {item.memory}</p><p>{item.power}</p><p>{item.socket}</p>
                                <p>Цена: {item.price} byn</p>
                            </div>
                        </div>
                    </div>
                ))}
            <button className={styles.btnClear} onClick={clearAll}>Очистить корзину</button>
            <button className={styles.btnClear}>Оформить заказ</button>
        </div>
    );
};
