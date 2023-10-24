

import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_DE_TU_API_AQUI');
        if (!response.ok) {
          throw new Error('La solicitud a la API no fue exitosa');
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        productos.map((producto) => (
          <Item
            key={producto.id}
            name={producto.name}
            description={producto.description}
            price={producto.price}
          />
        ))
      )}
    </>
  );
}

export default ItemListContainer;
