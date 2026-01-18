

import styles from './inventario.module.css';
function InventarioPage() {
    const productos = [
        {id:1, nombre:"Pollo",emoji: "🐔", cantidad: 50, ubicacion: "Estante 1" },
        {id:2, nombre:"Pescado", emoji: "🐟", cantidad: 30, ubicacion: "Estante 2" },
        {id:3, nombre:"Huevos", emoji: "🥚", cantidad: 100, ubicacion: "Estante 3" },
        {id:4, nombre:"Brocoli", emoji: "🥦", cantidad: 25, ubicacion: "Estante 4" },
        {id:5, nombre:"Zanahoria", emoji: "🥕", cantidad: 40, ubicacion: "Estante 5" },
        {id:6, nombre:"Lechuga", emoji: "🥬", cantidad: 20, ubicacion: "Estante 6" },
        {id:7, nombre:"Manzana", emoji: "🍎", cantidad: 60, ubicacion: "Estante 7" },
        {id:8, nombre:"Banana", emoji: "🍌", cantidad: 45, ubicacion: "Estante 8" },
        {id:9, nombre:"Naranja", emoji: "🍊", cantidad: 35, ubicacion: "Estante 9" },
        {id:10, nombre:"Pan", emoji: "🍞", cantidad: 80, ubicacion: "Estante 10" },
        {id:11, nombre:"Arroz", emoji: "🍚", cantidad: 120, ubicacion: "Estante 11" },
        {id:12, nombre:"Pasta", emoji: "🍝", cantidad: 90, ubicacion: "Estante 12" },
        {id:13, nombre:"Tomate", emoji: "🍅", cantidad: 55, ubicacion: "Estante 13" },
        {id:14, nombre:"Cebolla", emoji: "🧅", cantidad: 70, ubicacion: "Estante 14" },
        {id:15, nombre:"Ajo", emoji: "🧄", cantidad: 30, ubicacion: "Estante 15" },
        {id:16, nombre:"Lechuga romana", emoji: "🥗", cantidad: 25, ubicacion: "Estante 16" },
        {id:17, nombre:"Fresa", emoji: "🍓", cantidad: 40, ubicacion: "Estante 17" },
        {id:18, nombre:"Uva", emoji: "🍇", cantidad: 50, ubicacion: "Estante 18" },
        {id:19, nombre:"Piña", emoji: "🍍", cantidad: 15, ubicacion: "Estante 19" },
        {id:20, nombre:"Sandía", emoji: "🍉", cantidad: 20, ubicacion: "Estante 20" },
        {id:21, nombre:"Leche", emoji: "🥛", cantidad: 65, ubicacion: "Estante 21" },
        {id:22, nombre:"Queso", emoji: "🧀", cantidad: 35, ubicacion: "Estante 22" },
        {id:23, nombre:"Yogurt", emoji: "🍨", cantidad: 45, ubicacion: "Estante 23" },
        {id:24, nombre:"Carne de res", emoji: "🥩", cantidad: 40, ubicacion: "Estante 24" },
        {id:25, nombre:"Jamón", emoji: "🍖", cantidad: 28, ubicacion: "Estante 25" },
    ];

    return (
        <div>
            <h1>Inventario</h1>
            <p>Gestión del inventario del kiosko.</p>
           <div className={styles.tableContainer}>
            <table className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <th className={styles.th}>Producto</th>
                    <th className={styles.th}>Cantidad</th>
                    <th className={styles.th}>Ubicación</th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {productos.map(producto => (
                    <tr key={producto.id}>
                        <td>{producto.emoji} {producto.nombre}</td>
                        <td>{producto.cantidad}</td>
                        <td>{producto.ubicacion}</td>
                    </tr>
                ))}
            </tbody>
           </table>
           </div>
        </div>
    );
}
export default InventarioPage;