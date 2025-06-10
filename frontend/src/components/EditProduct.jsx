import React, { useState, useEffect } from 'react';
import { updateProduct } from '../api';

const EditProduct = ({ product, onUpdated, cancelEdit }) => {
  const [form, setForm] = useState(product);

  useEffect(() => {
    setForm(product);
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(product._id, form);
    onUpdated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Product</h3>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="price" value={form.price} onChange={handleChange} />
      <input name="description" value={form.description} onChange={handleChange} />
      <input name="quantity" value={form.quantity} onChange={handleChange} />
      <button type="submit">Update</button>
      <button onClick={cancelEdit}>Cancel</button>
    </form>
  );
};

export default EditProduct;
