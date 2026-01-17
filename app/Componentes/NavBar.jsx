import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";

function navBar() {
  return (
    <div>
      <nav className={styles.navBar}>
      <ul className={styles.ulNavBar}>
        <li className={styles.liNavBar}>
          <Link href="/">
            <div className={styles.logoContainer}>
              <Image src="/logo.svg" alt="KIOSKO APP" width={45} height={45} />
              <span className={styles.titulo}>MIKIOSKITO</span>
            </div>
          </Link>
        </li>
        <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/">🏠 Inicio</Link></li>
         <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/about">ℹ️ Acerca</Link></li>
        <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/productos">🛍️ Productos</Link></li>
       
        <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/inventario">📦 Inventario</Link></li>
        <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/servicios">🔧 Servicios</Link></li>
        <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/proveedores">🤝 Proveedores</Link></li>
        <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/compras">💳 Compras</Link></li>
        <li className={styles.liNavBar}><Link className={styles.aNavBar}  href="/ventas">💰 Ventas</Link></li> 
      </ul>
    </nav>  

    </div>
    
  );
}
export default navBar;