import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
const [form, setForm] = useState({
    title: "",
    price: "",
    currency: "€",
    year: "",
    stock: "",
    imgSrc: ""
});

const navigate = useNavigate();

const handleChange = (e) => {
  const { name, value } = e.target;
setForm({ ...form, [name]: value});
};

const handleSubmit = (e) => {
  e.preventDefault();
  onAdd({ ...form, id: Date.now() });
    navigate("/");
};

  return (
    <div>
      <h1>Add a product</h1>

      <form onSubmit={handleSubmit}>
        <input 
        name="title"
        value={form.title}
        type="text" 
        placeholder="Name of the product" 
        onChange={handleChange}
        required 
        />
        <input 
        name="price"
        type="number" 
        value={form.price}
        placeholder="Price" 
        onChange={handleChange}
        required 
        />
        <input 
        name="year"
        type="number" 
        value={form.year}
        placeholder="Year" 
        onChange={handleChange}
        required 
        />
        <input 
        name="imgSrc"
        value={form.imgSrc}
        type="text" 
        placeholder="URL of the image" 
        onChange={handleChange}
        required 
        />
        <input 
        name="stock"
        value={form.stock}
        type="number" 
        placeholder="Stock" 
        onChange={handleChange}
        required 
        />
        <button 
        type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
