import styles from "../Products/Mb.module.css";
import {useState} from "react"
import {mbData} from "../../data/mbData";
import {Button} from "../Button/Button";

export const Mb=()=>{
    const products=mbData
    const [objArr, setValue] = useState(products);
    const result = objArr.map((product)=> {
        return(
            <div key={product.id} className={styles.card}>
                <div className={styles.img_block}>
                    <img src={product.img} width={200} style={{padding:'10px'}}/>
                </div>
                <div className={styles.text}>
                    <p>Материнская плата {product.name}</p>
                    <p>Модель: {product.model}</p>
                    <p>Сокет: {product.socket} </p>
                    <p>Память: {product.ram} </p>
                    <p>Цена: {product.price} byn</p>
                </div>
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