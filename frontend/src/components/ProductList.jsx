import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api';

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {products.map(p => (
          <li key={p._id}>
            {p.name} - ₹{p.price} - {p.quantity} in stock
            <button onClick={() => onEdit(p)}>Edit</button>
            <button onClick={() => handleDelete(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
