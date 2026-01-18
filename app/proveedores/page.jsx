import proveedores from "../../data/proveedores";
import styles from './proveedores.module.css';
function Proveedores(){
    return (
        <div>
            <h1 style={{textAlign:'center',color:'green'}}>Listado de Proveedores</h1> 
           
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            
                            <th>Nombre</th>
                            <th>Categoria</th>
                            <th>Contacto</th>
                            <th>Teléfono</th>
                            <th>Dirección</th>
                        </tr>
                    </thead>
                    <tbody>
                        {proveedores.map(proveedor => (
                            <tr key={proveedor.id}>
                         
                                <td>{proveedor.emoji} {proveedor.nombre} </td>
                                <td>  {proveedor.categoria} </td>
                                <td>  {proveedor.contacto} </td>
                                <td>  {proveedor.telefono} </td>
                                <td>  {proveedor.direccion} </td>
                            </tr>
                        ))}
               
                    </tbody>
                </table>
                
       
        </div>
    );
}
export default Proveedores;