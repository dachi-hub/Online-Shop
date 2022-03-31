 import styles from "../Products/Amd.module.css";
import {useState} from "react";
import {Basket} from "../Basket/Basket";


const data=[
    {img:"https://www.amd.com/system/files/2018-11/10788-ryzen-chip-left-angle-960x548.png",name:'Ryzen 5', model:'2600', type:'Oem', core:'6',socket:"AM4", price:'845', id:'12311',inCart: false},
    {img:"https://www.amd.com/system/files/2018-11/10788-ryzen-chip-left-angle-960x548.png",name:'Ryzen 5', model:'3600', type:'Oem', core:'6',socket:"AM4", price:'800', id:'12312',inCart: false},
    {img:"https://www.amd.com/system/files/2018-11/10788-ryzen-chip-left-angle-960x548.png",name:'Ryzen 5', model:'3600', type:'Box', core:'6',socket:"AM4", price:'1150', id:'12313',inCart: false},
    {img:"https://www.amd.com/system/files/2018-11/10788-ryzen-chip-left-angle-960x548.png",name:'Ryzen 5 PRO', model:'4650G', type:'Oem', core:'6',socket:"AM4", price:'800', id:'12316',inCart: false},
    {img:"https://www.amd.com/system/files/2018-11/10788-ryzen-chip-left-angle-960x548.png",name:'Ryzen 5', model:'5600', type:'Oem', core:'6',socket:"AM4", price:'1100', id:'12317',inCart: false},
    {img:"https://www.amd.com/system/files/2018-11/10788-ryzen-chip-left-angle-960x548.png",name:'Ryzen 5', model:'5600G', type:'Oem', core:'6',socket:"AM4", price:'1210', id:'12317',inCart: false},
    {img:"https://www.amd.com/system/files/2018-11/10788-ryzen-chip-left-angle-960x548.png",name:'Ryzen 7', model:'2700', type:'Oem', core:'8',socket:"AM4", price:'1185', id:'12318',inCart: false},
    {img:"https://www.amd.com/system/files/2018-11/10788-ryzen-chip-left-angle-960x548.png",name:'Ryzen 7', model:'3700X', type:'Oem', core:'8',socket:"AM4", price:'1216', id:'12319',inCart: false},
    {img:"https://www.amd.com/system/files/2018-11/10788-ryzen-chip-left-angle-960x548.png",name:'Ryzen 7', model:'3700X', type:'Box', core:'8',socket:"AM4", price:'1700', id:'12401',inCart: false},
    {img:"https://www.amd.com/system/files/2018-11/10788-ryzen-chip-left-angle-960x548.png",name:'Ryzen 7', model:'5700G', type:'Oem', core:'8',socket:"AM4", price:'1399', id:'12402',inCart: false},
    {img:"https://www.amd.com/system/files/2018-11/10788-ryzen-chip-left-angle-960x548.png",name:'Ryzen 9', model:'5900X', type:'Oem', core:'12',socket:"AM4", price:'2399', id:'12303',inCart: false},
    {img:"https://www.amd.com/system/files/2018-11/10788-ryzen-chip-left-angle-960x548.png",name:'Ryzen 9', model:'5900X', type:'Box', core:'12',socket:"AM4", price:'3399', id:'12304',inCart: false},
]


export const Amd=()=>{
    const [objArr, setValue] = useState(data);
    const result = objArr.map((obj)=> {
        return(
            <div key={obj.id} className={styles.card}>
                <img src={obj.img} width={300} style={{padding:'10px'}}/>
                <p>Процессор {obj.name} {obj.model}</p>
                <p>Тип поставки: {obj.type} </p>
                <p>Ядер: {obj.core} </p>
                <p>Сокет: {obj.socket} </p>
                <p>Цена: {obj.price} byn</p>
                <button>Нажми меня</button>
            </div>
        )
    });
    return(
        <div className={styles.block}>
            {result}
        </div>
    )
}
