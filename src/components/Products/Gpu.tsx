import styles from "../Products/Ram.module.css";
import {useState} from "react"
import {Button} from "../Button/Button";
import {gpuData} from "../../data/gpuData";

export const Gpu=()=>{
    const products=gpuData
    const [objArr, setValue] = useState(products);
    const result = objArr.map((product)=> {
        return(
            <div key={product.id} className={styles.card}>
                <img src={product.img} width={250} style={{padding:'10px'}}/>
                <p>Видеокарта {product.name}</p>
                <p>Модель: {product.model}</p>
                <p>Объем: {product.memory}Gb</p>
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