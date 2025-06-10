import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import EditProduct from './components/EditProduct';

const App = () => {
  const [editing, setEditing] = useState(null);

  const handleEdit = (product) => setEditing(product);
  const handleUpdated = () => setEditing(null);
  const handleCancel = () => setEditing(null);

  return (
    <div>
      <h1>Inventory Manager</h1>
      {editing ? (
        <EditProduct product={editing} onUpdated={handleUpdated} cancelEdit={handleCancel} />
      ) : (
        <ProductForm onCreated={() => {}} />
      )}
      <ProductList onEdit={handleEdit} />
    </div>
  );
};

export default App;
