 import styles from "../Products/Cpu.module.css";
 import {useState} from "react"
 import {Button} from "../Button/Button";
 import {cpuData} from "../../data/cpuData";

 // @ts-ignore


 export const Cpu=()=>{
     const [objArr, setValue] = useState(cpuData);
     const result = objArr.map((obj)=> {
         return(
                 <div key={obj.id} className={styles.card}>
                     <img src={obj.img} width={250} style={{padding:'10px'}}/>
                     <p>Процессор {obj.name} {obj.model}</p>
                     <p>Тип поставки: {obj.type} </p>
                     <p>Ядер: {obj.core} </p>
                     <p>Сокет: {obj.socket} </p>
                     <p>Цена: {obj.price} byn</p>
                     <button>Нажми</button>
                 </div>
         )
     });
     return(
         <div className={styles.block}>
             {result}
         </div>
     )
 }