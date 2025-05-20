import React from 'react';


function Producto({ producto }) {
  return (
    <div className="producto">
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen} alt={producto.nombre} />
      <a href={producto.linkCompra} target="_blank" rel="noopener noreferrer">
        <button>Comprar</button>
      </a>
    </div>
  );
}

export default Producto;