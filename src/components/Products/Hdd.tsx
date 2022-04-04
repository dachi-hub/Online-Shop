import styles from "../Products/Hdd.module.css";
import {useState} from "react"
import {hddData} from "../../data/hddData";
import {Button} from "../Button/Button";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/actions/cartActions";

export const Hdd=()=>{
    const products=hddData
    const [objArr, setValue] = useState(products);
    const dispatch = useDispatch();

    const addToCartAction = (product: any) => {
        console.log();
        dispatch(addToCart(product));
    };
    const result = objArr.map((product)=> {
        return(
            <div key={product.id} className={styles.card}>
                <img src={product.img} width={250} style={{padding:'10px'}}/>
                <p>{product.name}</p>
                <p>Модель: {product.model}</p>
                <p>Объём: {product.memory}</p>
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