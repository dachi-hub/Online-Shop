import styles from "./MotherBoards.module.css";
import {motherBoardsData} from "../../data/motherBoardsData";
import {Button} from "../Button/Button";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/actions/cartActions";

export const MotherBoards=()=>{
    const products=motherBoardsData
    const dispatch = useDispatch();

    const addToCartAction = (product: any) => {
        console.log();
        dispatch(addToCart(product));
    };
    const result = products.map((product)=> {
        return(
            <div key={product.id} className={styles.card}>
                <div className={styles.img_block}>
                    <img src={product.img} width={200} style={{padding:'10px'}}/>
                </div>
                <div className={styles.text}>
                    <p>{product.name}</p>
                    <p>Модель: {product.model}</p>
                    <p>Сокет: {product.socket} </p>
                    <p>Память: {product.ram} </p>
                    <p>Цена: {product.price} byn</p>
                </div>
                <Button onClick={() => addToCartAction(product)}/>
            </div>
        )
    });
    return(
        <div className={styles.block}>
            {result}
        </div>
    )
}