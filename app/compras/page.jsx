import styles from '../compras/compras.module.css';

function Compras() {
    const productosCompras = [
        { id: 1, nombre: 'Pollo', cantidad: 300, unidad: 'Kg' },
        { id: 2, nombre: 'Pescado', cantidad: 200, unidad: 'Kg' },
        { id: 3, nombre: 'Huevos', cantidad: 120, unidad: 'Unidad' },
        { id: 4, nombre: 'Pan', cantidad: 150, unidad: 'Unidad' },
        { id: 5, nombre: 'Arroz', cantidad: 500, unidad: 'Kg' },
        { id: 6, nombre: 'Pasta', cantidad: 400, unidad: 'Kg' },
        { id: 7, nombre: 'Leche', cantidad: 250, unidad: 'Litros' },
        { id: 8, nombre: 'Queso', cantidad: 80, unidad: 'Kg' },
        { id: 9, nombre: 'Yogurt', cantidad: 140, unidad: 'Unidad' },
        { id: 10, nombre: 'Manzana', cantidad: 220, unidad: 'Kg' },
        { id: 11, nombre: 'Banana', cantidad: 180, unidad: 'Kg' },
        { id: 12, nombre: 'Naranja', cantidad: 200, unidad: 'Kg' },
        { id: 13, nombre: 'Tomate', cantidad: 160, unidad: 'Kg' },
        { id: 14, nombre: 'Cebolla', cantidad: 210, unidad: 'Kg' },
        { id: 15, nombre: 'Ajo', cantidad: 50, unidad: 'Kg' },
        { id: 16, nombre: 'Lechuga', cantidad: 90, unidad: 'Unidad' },
        { id: 17, nombre: 'Brocoli', cantidad: 70, unidad: 'Kg' },
        { id: 18, nombre: 'Zanahoria', cantidad: 130, unidad: 'Kg' },
        { id: 19, nombre: 'Fresa', cantidad: 60, unidad: 'Kg' },
        { id: 20, nombre: 'Uva', cantidad: 75, unidad: 'Kg' },
        { id: 21, nombre: 'Piña', cantidad: 40, unidad: 'Unidad' },
        { id: 22, nombre: 'Sandía', cantidad: 30, unidad: 'Unidad' },
        { id: 23, nombre: 'Carne de res', cantidad: 120, unidad: 'Kg' },
        { id: 24, nombre: 'Jamón', cantidad: 90, unidad: 'Kg' },
        { id: 25, nombre: 'Mantequilla', cantidad: 65, unidad: 'Kg' },
        { id: 26, nombre: 'Aceite', cantidad: 110, unidad: 'Litros' },
        { id: 27, nombre: 'Azúcar', cantidad: 340, unidad: 'Kg' },
        { id: 28, nombre: 'Sal', cantidad: 200, unidad: 'Kg' },
        { id: 29, nombre: 'Harina', cantidad: 260, unidad: 'Kg' },
        { id: 30, nombre: 'Café', cantidad: 95, unidad: 'Kg' }
    ];

    return (
        <div className={styles.comprasContainer}>
            <header className={styles.header}>
                <h1>Compras</h1>
                <p>Bienvenidos a  Pagina de Compras!</p>
            </header>

            <div className={styles.contentRow}>
                <div className={styles.formWrapper}>
                    <form action="" className={styles.formCompact}>
                        <label htmlFor="codigo">Produto:</label>
                        <input type="text" id="codigo" name="codigo" />
                        <br />
                        <label htmlFor="nombre"></label>
                        <label htmlFor="cantidad">Cantidad:</label>
                        <input type="number" id="cantidad" name="cantidad" />
                        <br />
                        <br />
                        <button type="submit">Comprar </button>
                    </form>
                </div>

                <div className={styles.listWrapper}>
                    <h2 className={styles.listTitle}>Lista de Compras</h2>
                    <ul>
                        <table className={styles.tableCompact}>
                            <thead className={styles.theadCompras}>
                                <tr>
                                    <th>Produto</th>
                                    <th>Cantidad</th>
                                    <th>Unidad</th>
                                </tr>
                            </thead>
                            <tbody className={styles.tbodyCompras}>
                                {productosCompras.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.nombre}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.unidad}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Compras;