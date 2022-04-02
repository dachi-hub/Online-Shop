import styles from "../Products/Ram.module.css";
import {useState} from "react"
import {ramData} from "../../data/ramData";
import {Button} from "../Button/Button";

export const Ram=()=>{
    const products=ramData
    const [objArr, setValue] = useState(products);
    const result = objArr.map((product)=> {
        return(
            <div key={product.id} className={styles.card}>
                <img src={product.img} width={250} style={{padding:'10px'}}/>
                <p>Оперативная память {product.name} {product.model}</p>
                <p>Объем: {product.memory}Gb</p>
                <p>Частота: {product.freq} МГц </p>
                <p>Цена: {product.price} byn</p>
                <Button/>
            </div>
        )
    });
    return(
        <div className={styles.block}>
            {result}
        </div>
    )
}