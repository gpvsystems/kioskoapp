
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './productos.module.css';
import productos from '../../data/productos.js';

function Productos(){

    function cargarItem(id){
        console.log("Cargando producto con id: " + id);
    }
   
    

    
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