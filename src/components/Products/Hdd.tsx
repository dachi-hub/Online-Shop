import styles from "../Products/Hdd.module.css";
import {useState} from "react"
import {hddData} from "../../data/hddData";
import {Button} from "../Button/Button";

export const Hdd=()=>{
    const products=hddData
    const [objArr, setValue] = useState(products);
    const result = objArr.map((product)=> {
        return(
            <div key={product.id} className={styles.card}>
                <img src={product.img} width={250} style={{padding:'10px'}}/>
                <p>Жесткий диск {product.name}</p>
                <p>Модель: {product.model}</p>
                <p>Объём: {product.memory}Tb</p>
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