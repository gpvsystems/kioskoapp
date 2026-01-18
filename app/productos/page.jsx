
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './productos.module.css';

function Productos(){

    function cargarItem(id){
        console.log("Cargando producto con id: " + id);
    }
   
    const productos = [
        {id:1, nombre:"Pollo",categoria :"Animal", precio: 10.0, emoji: "🐔" },
        {id:2, nombre:"Pescado", categoria :"Animal", precio: 15.0, emoji: "🐟" },
        {id:3, nombre:"Huevos", categoria :"Animal", precio: 20.0, emoji: "🥚" },
        {id:4, nombre:"Brocoli", categoria :"Vegetal", precio: 25.0, emoji: "🥦" },
        {id:5, nombre:"Zanahoria", categoria :"Vegetal", precio: 30.0, emoji: "🥕" },
        {id:6, nombre:"Lechuga", categoria :"Vegetal", precio: 35.0, emoji: "🥬" },
        {id:7, nombre:"Manzana", categoria :"Fruta", precio: 40.0, emoji: "🍎" },
        {id:8, nombre:"Banana", categoria :"Fruta", precio: 45.0, emoji: "🍌" },
        {id:9, nombre:"Naranja", categoria :"Fruta", precio: 50.0, emoji: "🍊" },
        {id:10, nombre:"Pan", categoria :"Cereal", precio: 55.0, emoji: "🍞" },
        {id:11, nombre:"Arroz", categoria :"Cereal", precio: 60.0, emoji: "🍚" },
        {id:12, nombre:"Pasta", categoria :"Cereal", precio: 65.0, emoji: "🍝" },
        {id:13, nombre:"Tomate", categoria :"Vegetal", precio: 12.0, emoji: "🍅" },
        {id:14, nombre:"Cebolla", categoria :"Vegetal", precio: 8.0, emoji: "🧅" },
        {id:15, nombre:"Ajo", categoria :"Vegetal", precio: 5.0, emoji: "🧄" },
        {id:16, nombre:"Lechuga romana", categoria :"Vegetal", precio: 18.0, emoji: "🥗" },
        {id:17, nombre:"Fresa", categoria :"Fruta", precio: 22.0, emoji: "🍓" },
        {id:18, nombre:"Uva", categoria :"Fruta", precio: 28.0, emoji: "🍇" },
        {id:19, nombre:"Piña", categoria :"Fruta", precio: 35.0, emoji: "🍍" },
        {id:20, nombre:"Sandía", categoria :"Fruta", precio: 42.0, emoji: "🍉" },
        {id:21, nombre:"Leche", categoria :"Lácteos", precio: 12.0, emoji: "🥛" },
        {id:22, nombre:"Queso", categoria :"Lácteos", precio: 25.0, emoji: "🧀" },
        {id:23, nombre:"Yogurt", categoria :"Lácteos", precio: 18.0, emoji: "🍨" },
        {id:24, nombre:"Carne de res", categoria :"Animal", precio: 45.0, emoji: "🥩" },
        {id:25, nombre:"Jamón", categoria :"Animal", precio: 35.0, emoji: "🍖" },
    ];  


    
    const listaProductos = productos.map(producto => (
        <li  className={styles.card} key={producto.id}>
           <div className={styles.emoji}>{producto.emoji}</div>
           <Image src="/producto.png" alt={producto.nombre} width={200} height={150} />
           <br />
            <b> {producto.nombre}</b>
            <br />
            <i>{producto.categoria}</i>
            <p>
               ${producto.precio} 
            </p>
            
            </li>
    ));

    return (
        <div>

            <h1 className={styles.titulo}>Listado de productos</h1>
            <ul className={styles.ulproductos}>
                {listaProductos}
            </ul>
        </div>
    );
}
export default Productos;