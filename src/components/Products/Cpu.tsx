 import styles from "../Products/Cpu.module.css";
 import {useState} from "react"
 import {cpuData} from "../../data/cpuData";
 import {Button} from "../Button/Button";

 export const Cpu=()=>{
     const products=cpuData
     const [objArr, setValue] = useState(products);
     const result = objArr.map((product)=> {
         return(
                 <div key={product.id} className={styles.card}>
                     <img src={product.img} width={250} style={{padding:'10px'}}/>
                     <p>Процессор {product.name} {product.model}</p>
                     <p>Тип поставки: {product.type} </p>
                     <p>Ядер: {product.core} </p>
                     <p>Сокет: {product.socket} </p>
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