import styles from "../Products/BlockPower.module.css";
import {blockPowerData} from "../../data/blockPowerData";
import {Button} from "../Button/Button";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/actions/cartActions";

export const BlockPower=()=>{
    const products=blockPowerData
    const dispatch = useDispatch();

    const addToCartAction = (product: any) => {
        console.log();
        dispatch(addToCart(product));
    };
    const result = products.map((product)=> {
        return(
            <div key={product.id} className={styles.card}>
                <img src={product.img} width={250} style={{padding:'10px'}}/>
                <p>{product.name}</p>
                <p>Мощьность: {product.power}</p>
                <p>Цена: {product.price} byn</p>
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