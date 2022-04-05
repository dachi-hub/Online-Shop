 import styles from "../Products/Cpu.module.css";
 import {cpuData} from "../../data/cpuData";
 import {Button} from "../Button/Button";
 import { useDispatch } from "react-redux";
 import {addToCart} from "../../redux/actions/cartActions";


 export const Cpu=()=>{
     const products=cpuData
     const dispatch = useDispatch();

     const addToCartAction = (product: any) => {
         console.log();
         dispatch(addToCart(product));
     };
     const result = products.map((product)=> {
         return(
                 <div key={product.id} className={styles.card}>
                     <img src={product.img} width={200} style={{padding:'5px'}}/>
                     <p>{product.name} {product.model}</p>
                     <p>Тип поставки: {product.type} </p>
                     <p>Ядер: {product.core} </p>
                     <p>Сокет: {product.socket} </p>
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