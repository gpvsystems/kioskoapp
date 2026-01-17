
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './productos.module.css';

function Productos(){

    function cargarItem(id){
        console.log("Cargando producto con id: " + id);
    }
   
    const productos = [
        {id:1, nombre:"Pollo",categoria :"Animal", precio: 10.0 },
        {id:2, nombre:"Pescado", categoria :"Animal", precio: 15.0 },
        {id:3, nombre:"Huevos", categoria :"Animal", precio: 20.0 },
        {id:4, nombre:"Brocoli", categoria :"Vegetaal", precio: 25.0 },
        {id:5, nombre:"Zanahoria", categoria :"Vegetal", precio: 30.0 },
        {id:6, nombre:"Lechuga", categoria :"Vegetal", precio: 35.0 },
        {id:7, nombre:"Manzana", categoria :"Fruta", precio: 40.0 },
        {id:8, nombre:"Banana", categoria :"Fruta", precio: 45.0 },
        {id:9, nombre:"Naranja", categoria :"Fruta", precio: 50.0 },
        {id:10, nombre:"Pan", categoria :"Cereal", precio: 55.0 },
        {id:11, nombre:"Arroz", categoria :"Cereal", precio: 60.0 },
        {id:12, nombre:"Pasta", categoria :"Cereal", precio: 65.0 },
        

    ];  


    
    const listaProductos = productos.map(producto => (
        <li  className={styles.card} key={producto.id}>
           
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