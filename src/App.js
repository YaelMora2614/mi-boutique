import React from 'react';
import Producto from './components/Producto';
import './styles.css';

const productos = [
  {
    nombre: 'Camiseta Roja',
    imagen: 'https://via.placeholder.com/200x200?text=Camiseta+Roja',
    linkCompra: 'https://ejemplo.com/camiseta-roja',
  },

  {
    nombre: 'Zapatos Negros',
    imagen: 'https://via.placeholder.com/200x200?text=Zapatos+Negros',
    linkCompra: 'https://ejemplo.com/zapatos-negros',
  },

  {
    nombre: 'Camiseta Roja',
    imagen: 'https://via.placeholder.com/200x200?text=Camiseta+Roja',
    linkCompra: 'https://ejemplo.com/camiseta-roja',
  },

];

function App() {
  return (
    <div className="contenedor-catalogo">
      <h1>Catálogo de Productos</h1>
      <div className="catalogo">
        {productos.map((prod, index) => (
          <Producto key={index} producto={prod} />
        ))}
      </div>
    </div>
  );
}

export default App;