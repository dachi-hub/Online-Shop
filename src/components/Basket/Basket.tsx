import { useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {clear} from "../../redux/actions/cartActions";
import styles from "../Basket/Basket.module.css";
import {Modal} from "../Modal/Modal";

export const Basket = () => {
    const [isModal, setModal] = useState(false)
    const onClose = () => setModal(false)


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
            <Modal visible={isModal}
                   title={'Оставьте свои данные'}
                   content={'Проверяйте правильность данных!'}
                   onClose={onClose}
                   />
            <div className={styles.btns}>
                <button className={styles.btnClear} onClick={clearAll}>Очистить корзину</button>
                <button className={styles.btnModal} onClick={() => setModal(true)}>Оформить заказ</button>
            </div>
        </div>
    );
};
