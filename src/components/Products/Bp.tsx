import styles from "../Products/Cpu.module.css";
import {useState} from "react"
import {bpData} from "../../data/bpData";
import {Button} from "../Button/Button";

export const Bp=()=>{
    const products=bpData
    const [objArr, setValue] = useState(products);
    const result = objArr.map((product)=> {
        return(
            <div key={product.id} className={styles.card}>
                <img src={product.img} width={250} style={{padding:'10px'}}/>
                <p>Блок питания {product.name}</p>
                <p>Мощьность: {product.power}W</p>
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