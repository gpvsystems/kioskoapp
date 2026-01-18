

import styles from './inventario.module.css';
function InventarioPage() {
    const productos = [
        {id:1, nombre:"Pollo",emoji: "🐔", cantidad: 50, ubicacion: "Estante 1", proveedor: "Granja La Feliz", precio: 12.50, codigo: "POL001", fechaVto: "2026-02-15", estado: "Disponible", stockMinimo: 20 },
        {id:2, nombre:"Pescado", emoji: "🐟", cantidad: 5, ubicacion: "Estante 2", proveedor: "Pescados del Mar", precio: 18.00, codigo: "PES002", fechaVto: "2026-01-25", estado: "Disponible", stockMinimo: 15 },
        {id:3, nombre:"Huevos", emoji: "🥚", cantidad: 0, ubicacion: "Estante 3", proveedor: "Granja La Feliz", precio: 4.50, codigo: "HUE003", fechaVto: "2026-03-10", estado: "Disponible", stockMinimo: 50 },
        {id:4, nombre:"Brocoli", emoji: "🥦", cantidad: 25, ubicacion: "Estante 4", proveedor: "Verduras Frescas", precio: 8.00, codigo: "BRO004", fechaVto: "2026-01-22", estado: "Disponible", stockMinimo: 10 },
        {id:5, nombre:"Zanahoria", emoji: "🥕", cantidad: 8, ubicacion: "Estante 5", proveedor: "Verduras Frescas", precio: 6.00, codigo: "ZAR005", fechaVto: "2026-02-05", estado: "Disponible", stockMinimo: 15 },
        {id:6, nombre:"Lechuga", emoji: "🥬", cantidad: 0, ubicacion: "Estante 6", proveedor: "Verduras Frescas", precio: 5.50, codigo: "LEC006", fechaVto: "2026-01-20", estado: "Disponible", stockMinimo: 8 },
        {id:7, nombre:"Manzana", emoji: "🍎", cantidad: 60, ubicacion: "Estante 7", proveedor: "Frutas Naturales", precio: 7.00, codigo: "MAN007", fechaVto: "2026-02-28", estado: "Disponible", stockMinimo: 25 },
        {id:8, nombre:"Banana", emoji: "🍌", cantidad: 3, ubicacion: "Estante 8", proveedor: "Frutas Naturales", precio: 5.00, codigo: "BAN008", fechaVto: "2026-01-28", estado: "Disponible", stockMinimo: 20 },
        {id:9, nombre:"Naranja", emoji: "🍊", cantidad: 35, ubicacion: "Estante 9", proveedor: "Frutas Naturales", precio: 8.50, codigo: "NAR009", fechaVto: "2026-02-20", estado: "Disponible", stockMinimo: 15 },
        {id:10, nombre:"Pan", emoji: "🍞", cantidad: 12, ubicacion: "Estante 10", proveedor: "Panadería El Trigo", precio: 3.50, codigo: "PAN010", fechaVto: "2026-01-19", estado: "Disponible", stockMinimo: 30 },
        {id:11, nombre:"Arroz", emoji: "🍚", cantidad: 120, ubicacion: "Estante 11", proveedor: "Cereales S.A.", precio: 9.00, codigo: "ARR011", fechaVto: "2026-06-30", estado: "Disponible", stockMinimo: 50 },
        {id:12, nombre:"Pasta", emoji: "🍝", cantidad: 90, ubicacion: "Estante 12", proveedor: "Cereales S.A.", precio: 6.50, codigo: "PAS012", fechaVto: "2026-05-15", estado: "Disponible", stockMinimo: 40 },
        {id:13, nombre:"Tomate", emoji: "🍅", cantidad: 0, ubicacion: "Estante 13", proveedor: "Verduras Frescas", precio: 7.50, codigo: "TOM013", fechaVto: "2026-01-23", estado: "Disponible", stockMinimo: 20 },
        {id:14, nombre:"Cebolla", emoji: "🧅", cantidad: 70, ubicacion: "Estante 14", proveedor: "Verduras Frescas", precio: 5.00, codigo: "CEB014", fechaVto: "2026-02-10", estado: "Disponible", stockMinimo: 25 },
        {id:15, nombre:"Ajo", emoji: "🧄", cantidad: 2, ubicacion: "Estante 15", proveedor: "Verduras Frescas", precio: 10.00, codigo: "AJO015", fechaVto: "2026-03-05", estado: "Disponible", stockMinimo: 12 },
        {id:16, nombre:"Lechuga romana", emoji: "🥗", cantidad: 25, ubicacion: "Estante 16", proveedor: "Verduras Frescas", precio: 6.00, codigo: "LER016", fechaVto: "2026-01-21", estado: "Disponible", stockMinimo: 10 },
        {id:17, nombre:"Fresa", emoji: "🍓", cantidad: 7, ubicacion: "Estante 17", proveedor: "Frutas Naturales", precio: 12.00, codigo: "FRE017", fechaVto: "2026-01-27", estado: "Disponible", stockMinimo: 15 },
        {id:18, nombre:"Uva", emoji: "🍇", cantidad: 0, ubicacion: "Estante 18", proveedor: "Frutas Naturales", precio: 11.00, codigo: "UVA018", fechaVto: "2026-02-01", estado: "Disponible", stockMinimo: 20 },
        {id:19, nombre:"Piña", emoji: "🍍", cantidad: 4, ubicacion: "Estante 19", proveedor: "Frutas Naturales", precio: 10.50, codigo: "PIN019", fechaVto: "2026-02-15", estado: "Bajo stock", stockMinimo: 10 },
        {id:20, nombre:"Sandía", emoji: "🍉", cantidad: 20, ubicacion: "Estante 20", proveedor: "Frutas Naturales", precio: 9.50, codigo: "SAN020", fechaVto: "2026-02-10", estado: "Disponible", stockMinimo: 10 },
        {id:21, nombre:"Leche", emoji: "🥛", cantidad: 65, ubicacion: "Estante 21", proveedor: "Lácteos Puros", precio: 8.00, codigo: "LEC021", fechaVto: "2026-02-01", estado: "Disponible", stockMinimo: 30 },
        {id:22, nombre:"Queso", emoji: "🧀", cantidad: 11, ubicacion: "Estante 22", proveedor: "Lácteos Puros", precio: 14.00, codigo: "QUE022", fechaVto: "2026-03-20", estado: "Disponible", stockMinimo: 15 },
        {id:23, nombre:"Yogurt", emoji: "🍨", cantidad: 0, ubicacion: "Estante 23", proveedor: "Lácteos Puros", precio: 6.00, codigo: "YOG023", fechaVto: "2026-01-30", estado: "Disponible", stockMinimo: 20 },
        {id:24, nombre:"Carne de res", emoji: "🥩", cantidad: 40, ubicacion: "Estante 24", proveedor: "Carnes Selectas", precio: 25.00, codigo: "CAR024", fechaVto: "2026-01-26", estado: "Disponible", stockMinimo: 15 },
        {id:25, nombre:"Jamón", emoji: "🍖", cantidad: 6, ubicacion: "Estante 25", proveedor: "Carnes Selectas", precio: 20.00, codigo: "JAM025", fechaVto: "2026-02-20", estado: "Disponible", stockMinimo: 10 },
    ];

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