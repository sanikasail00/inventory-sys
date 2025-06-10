import React, { useState } from 'react';
import { createProduct } from '../api';

const ProductForm = ({ onCreated }) => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    quantity: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(form);
    setForm({ name: '', price: '', description: '', quantity: '' });
    onCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Product</h3>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default ProductForm;
