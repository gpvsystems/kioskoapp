

import styles from './inventario.module.css';
import productos from '../../data/productos.js';
function InventarioPage() {
   
    return (
        <div>
            <h1 className={styles.title}>Inventario</h1>
            <p className={styles.description}>Gestión del inventario del kiosko.</p>
           <div className={styles.tableContainer}>
            <table className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <th className={styles.th}>Código</th>
                    <th className={styles.th}>Producto</th>
                    <th className={styles.th}>Cantidad</th>
                    <th className={styles.th}>Stock Mín.</th>
                    <th className={styles.th}>Precio</th>
                    <th className={styles.th}>Vencimiento</th>
                    <th className={styles.th}>Estado</th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {productos.map(producto => {
                    const getEstadoIcon = (cantidad, stockMinimo) => {
                        if (cantidad > stockMinimo) return "✅";
                        if (cantidad > 0) return "⚠️";
                        return "❌";
                    };
                    
                    return (
                    <tr key={producto.id}>
                        <td>{producto.codigo}</td>
                        <td>{producto.emoji} {producto.nombre}</td>
                        <td>{producto.cantidad}</td>
                        <td>{producto.stockMinimo}</td>
                        <td>${producto.precio.toFixed(2)}</td>
                        <td>{producto.fechaVto}</td>
                        <td>{getEstadoIcon(producto.cantidad, producto.stockMinimo)}</td>
                    </tr>
                    );
                })}
            </tbody>
           </table>
           </div>
        </div>
    );
}
export default InventarioPage;