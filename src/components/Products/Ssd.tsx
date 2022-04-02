import styles from "../Products/Ssd.module.css";
import {useState} from "react"
import {ssdData} from "../../data/ssdData";
import {Button} from "../Button/Button";

export const Ssd=()=>{
    const products=ssdData
    const [objArr, setValue] = useState(products);
    const result = objArr.map((product)=> {
        return(
            <div key={product.id} className={styles.card}>
                <img src={product.img} width={250} style={{padding:'10px'}}/>
                <p>SSD Накопитель {product.name}</p>
                <p>Модель: {product.model}</p>
                <p>Формафактор: {product.form}</p>
                <p>Объём: {product.memory}</p>
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