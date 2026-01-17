"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className={styles.navBar}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <div className={styles.logoContent}>
              <Image src="/logo.svg" alt="KIOSKO APP" width={45} height={45} />
              <span className={styles.titulo}>MIKIOSKITO</span>
            </div>
          </Link>
        </div>

        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ""}`}></span>
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ""}`}></span>
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ""}`}></span>
        </button>

        <ul className={`${styles.ulNavBar} ${menuOpen ? styles.menuOpen : ""}`}>
          <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/" onClick={() => setMenuOpen(false)}>🏠 Inicio</Link></li>
          <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/about" onClick={() => setMenuOpen(false)}>ℹ️ Acerca</Link></li>
          <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/productos" onClick={() => setMenuOpen(false)}>🛍️ Productos</Link></li>
          <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/inventario" onClick={() => setMenuOpen(false)}>📦 Inventario</Link></li>
          <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/servicios" onClick={() => setMenuOpen(false)}>🔧 Servicios</Link></li>
          <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/proveedores" onClick={() => setMenuOpen(false)}>🤝 Proveedores</Link></li>
          <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/compras" onClick={() => setMenuOpen(false)}>💳 Compras</Link></li>
          <li className={styles.liNavBar}><Link className={styles.aNavBar} href="/ventas" onClick={() => setMenuOpen(false)}>💰 Ventas</Link></li> 
        </ul>
      </nav>  
    </div>
  );

}
export default NavBar;