import {useState} from "react";
import ReactDOM from "react-dom";
import styles from "./Intel.module.css";
import {Button} from "../Button/Button";


const DataIntel=[
    {img:"https://www.notebookcheck-ru.com/fileadmin/Notebooks/Intel/Ice_Lake/Intel_10th_Gen_Core_i3_badge.jpg",name:'Intel Core', model:'i3-10100', type:'Oem', core:'4',socket:"LGA1200", price:'845', id:'22311'},
    {img:"https://www.notebookcheck-ru.com/fileadmin/Notebooks/Intel/Ice_Lake/Intel_10th_Gen_Core_i3_badge.jpg",name:'Intel Core', model:'i3-10100', type:'Box', core:'4',socket:"LGA1200", price:'800', id:'22312'},
    {img:"https://www.notebookcheck-ru.com/fileadmin/Notebooks/Intel/Ice_Lake/Intel_10th_Gen_Core_i3_badge.jpg",name:'Intel Core', model:'i3-10100F', type:'oem', core:'4',socket:"LGA1200", price:'1150', id:'22313'},
    {img:"https://www.notebookcheck-ru.com/fileadmin/Notebooks/Intel/Ice_Lake/Intel_10th_Gen_Core_i3_badge.jpg",name:'Intel Core', model:'i3-10100F', type:'Box', core:'4',socket:"LGA1200", price:'1150', id:'22314'},
    {img:"https://www.notebookcheck-ru.com/fileadmin/Notebooks/Intel/Ice_Lake/Intel_10th_Gen_Core_i5_badge.jpg",name:'Intel Core', model:'i5-10400', type:'Oem', core:'6',socket:"LGA1200", price:'800', id:'22315'},
    {img:"https://www.notebookcheck-ru.com/fileadmin/Notebooks/Intel/Ice_Lake/Intel_10th_Gen_Core_i5_badge.jpg",name:'Intel Core', model:'i5-10400', type:'Box', core:'6',socket:"LGA1200", price:'800', id:'22316'},
    {img:"https://www.notebookcheck-ru.com/fileadmin/Notebooks/Intel/Ice_Lake/Intel_10th_Gen_Core_i5_badge.jpg",name:'Intel Core', model:'i5-10400F', type:'Oem', core:'6',socket:"LGA1200", price:'800', id:'22317'},
    {img:"https://www.notebookcheck-ru.com/fileadmin/Notebooks/Intel/Ice_Lake/Intel_10th_Gen_Core_i5_badge.jpg",name:'Intel Core', model:'i5-10500', type:'Oem', core:'6',socket:"LGA1200", price:'800', id:'22318'},
    {img:"https://shop.by/images/intel_core_i7_10700k_1.jpg",name:'Intel Core', model:'i7-10700', type:'Oem', core:'8',socket:"LGA1200", price:'800', id:'22319'},
    {img:"https://shop.by/images/intel_core_i7_10700k_1.jpg",name:'Intel Core', model:'i7-10700', type:'Box', core:'8',socket:"LGA1200", price:'800', id:'22319'},
    {img:"https://shop.by/images/intel_core_i7_10700k_1.jpg",name:'Intel Core', model:'i7-10700F', type:'Oem', core:'8',socket:"LGA1200", price:'800', id:'23311'},
    {img:"https://shop.by/images/intel_core_i7_10700k_1.jpg",name:'Intel Core', model:'i7-10700F', type:'Box', core:'8',socket:"LGA1200", price:'800', id:'23312'},
    {img:"https://shop.by/images/intel_core_i7_10700k_1.jpg",name:'Intel Core', model:'i7-10700K', type:'Oem', core:'8',socket:"LGA1200", price:'800', id:'23313'},
    {img:"https://shop.by/images/intel_core_i7_10700k_1.jpg",name:'Intel Core', model:'i7-10700K', type:'Box', core:'8',socket:"LGA1200", price:'800', id:'23314'},
    {img:"https://shop.by/images/intel_core_i7_10700k_1.jpg",name:'Intel Core', model:'i7-10700KF', type:'Box', core:'8',socket:"LGA1200", price:'800', id:'23315'},
    {img:"https://shop.by/images/intel_core_i7_10700k_1.jpg",name:'Intel Core', model:'i7-10700KA', type:'Box', core:'8',socket:"LGA1200", price:'800', id:'23315'},
    {img:"https://content2.onliner.by/catalog/device/main/893f1a523d2ba5d67d472f57500f6c25.jpeg",name:'Intel Core', model:'i9-10900', type:'Oem', core:'10',socket:"LGA1200", price:'800', id:'23316'},
    {img:"https://content2.onliner.by/catalog/device/main/893f1a523d2ba5d67d472f57500f6c25.jpeg",name:'Intel Core', model:'i9-10900', type:'Box', core:'10',socket:"LGA1200", price:'800', id:'23317'},
    {img:"https://content2.onliner.by/catalog/device/main/893f1a523d2ba5d67d472f57500f6c25.jpeg",name:'Intel Core', model:'i9-10900F', type:'Oem', core:'10',socket:"LGA1200", price:'800', id:'23318'},
    {img:"https://content2.onliner.by/catalog/device/main/893f1a523d2ba5d67d472f57500f6c25.jpeg",name:'Intel Core', model:'i9-10900F', type:'Box', core:'10',socket:"LGA1200", price:'800', id:'23319'},
    {img:"https://content2.onliner.by/catalog/device/main/893f1a523d2ba5d67d472f57500f6c25.jpeg",name:'Intel Core', model:'i9-10900K', type:'Box', core:'10',socket:"LGA1200", price:'800', id:'24311'},
    {img:"https://content2.onliner.by/catalog/device/main/893f1a523d2ba5d67d472f57500f6c25.jpeg",name:'Intel Core', model:'i9-10900KF', type:'Box', core:'10',socket:"LGA1200", price:'800', id:'24312'},
    {img:"https://upload.wikimedia.org/wikipedia/commons/0/06/Intel_Core_i9_Logo_2020.png",name:'Intel Core', model:'i9-11900KF', type:'Box', core:'10',socket:"LGA1200", price:'800', id:'24313'},
    {img:"https://en.wikichip.org/w/images/d/d1/core_i9x_logo.png",name:'Intel Core', model:'i9-10920X', type:'Box', core:'10', socket:"LGA2066", price:'800', id:'24314'},
]

export const Intel=()=>{

    const [objArr, setValue] = useState(DataIntel);

    const result = objArr.map((obj) => {
        return <div key={obj.id} className={styles.card}>
            <img src={obj.img} width={300} style={{padding:'10px'}}/>
            <p>Процессор {obj.name} {obj.model}</p>
            <p>Тип поставки: {obj.type} </p>
            <p>Ядер: {obj.core} </p>
            <p>Сокет: {obj.socket} </p>
            <p>Цена: {obj.price} byn</p>
            <button onClick={log}>Нажми меня</button>
        </div>;
        function log(){
            let newData = [obj.id, obj.img, obj.name, obj.model, obj.type, obj.socket, obj.price];
            localStorage.setItem("data", JSON.stringify(newData));
            console.log(localStorage)
        }
    });

    return <div className={styles.block}>
        {result}
    </div>;
}
