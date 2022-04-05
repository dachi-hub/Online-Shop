import styles from "../Products/Gpu.module.css";
import {useState} from "react"
import {Button} from "../Button/Button";
import {gpuData} from "../../data/gpuData";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/actions/cartActions";

export const Gpu=()=>{
    const products=gpuData
    const dispatch = useDispatch();

    const addToCartAction = (product: any) => {
        console.log();
        dispatch(addToCart(product));
    };
    const result = products.map((product)=> {
        return(
            <div key={product.id} className={styles.card}>
                <img src={product.img} width={250} style={{padding:'10px'}}/>
                <p>В{product.name}</p>
                <p>Модель: {product.model}</p>
                <p>Объем: {product.memory}</p>
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