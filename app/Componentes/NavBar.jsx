"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (itemName) => {
    setDropdownOpen(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
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
          
          <li className={`${styles.liNavBar} ${styles.dropdown}`}>
            <button 
              className={`${styles.aNavBar} ${styles.dropdownToggle}`}
              onClick={() => toggleDropdown("tienda")}
            >
              🛍️ Tienda
              <span className={`${styles.dropdownArrow} ${dropdownOpen.tienda ? styles.open : ""}`}>▼</span>
            </button>
            <ul className={`${styles.dropdownMenu} ${dropdownOpen.tienda ? styles.show : ""}`}>
              <li><Link className={styles.aNavBar} href="/productos" onClick={() => setMenuOpen(false)}>🛒 Productos</Link></li>
              <li><Link className={styles.aNavBar} href="/inventario" onClick={() => setMenuOpen(false)}>📦 Inventario</Link></li>
            </ul>
          </li>

          <li className={`${styles.liNavBar} ${styles.dropdown}`}>
            <button 
              className={`${styles.aNavBar} ${styles.dropdownToggle}`}
              onClick={() => toggleDropdown("operaciones")}
            >
              ⚙️ Operaciones
              <span className={`${styles.dropdownArrow} ${dropdownOpen.operaciones ? styles.open : ""}`}>▼</span>
            </button>
            <ul className={`${styles.dropdownMenu} ${dropdownOpen.operaciones ? styles.show : ""}`}>
              <li><Link className={styles.aNavBar} href="/ventas" onClick={() => setMenuOpen(false)}>💰 Ventas</Link></li>
              <li><Link className={styles.aNavBar} href="/compras" onClick={() => setMenuOpen(false)}>💳 Compras</Link></li>
              <li><Link className={styles.aNavBar} href="/servicios" onClick={() => setMenuOpen(false)}>🔧 Servicios</Link></li>
            </ul>
          </li>

          <li className={`${styles.liNavBar} ${styles.dropdown}`}>
            <button 
              className={`${styles.aNavBar} ${styles.dropdownToggle}`}
              onClick={() => toggleDropdown("admin")}
            >
              🤝 Administración
              <span className={`${styles.dropdownArrow} ${dropdownOpen.admin ? styles.open : ""}`}>▼</span>
            </button>
            <ul className={`${styles.dropdownMenu} ${dropdownOpen.admin ? styles.show : ""}`}>
              <li><Link className={styles.aNavBar} href="/proveedores" onClick={() => setMenuOpen(false)}>🤝 Proveedores</Link></li>
            </ul>
          </li>
        </ul>
      </nav>  
    </div>
  );

}
export default NavBar;