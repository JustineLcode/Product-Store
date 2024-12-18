import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import './styles.css';


const App = () => {
    const [products, setProducts] = useState([
        {
          "id": 1,
          "title": "iPhone 14",
          "price": 1289.57,
          "currency": "€",
          "year": "2024",
          "stock": 57,
          "imgSrc": "https://m.media-amazon.com/images/I/619HAuZ95QL._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 2,
          "title": "Samsung Galaxy S23",
          "price": 999.99,
          "currency": "€",
          "year": "2024",
          "stock": 34,
          "imgSrc": "https://m.media-amazon.com/images/I/41xL-rs6wJL._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 3,
          "title": "Dell XPS 13 Laptop",
          "price": 1450.0,
          "currency": "€",
          "year": "2023",
          "stock": 21,
          "imgSrc": "https://m.media-amazon.com/images/I/71kdjJRuZmL._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 4,
          "title": "Apple MacBook Pro 14-inch",
          "price": 2499.99,
          "currency": "€",
          "year": "2024",
          "stock": 15,
          "imgSrc": "https://m.media-amazon.com/images/I/71mqeKhmEZL._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 5,
          "title": "Sony WH-1000XM5 Headphones",
          "price": 399.95,
          "currency": "€",
          "year": "2023",
          "stock": 45,
          "imgSrc": "https://m.media-amazon.com/images/I/51QeS0jkx-L._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 6,
          "title": "Logitech MX Master 3 Mouse",
          "price": 99.99,
          "currency": "€",
          "year": "2023",
          "stock": 120,
          "imgSrc": "https://m.media-amazon.com/images/I/61TU7cMHepL._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 7,
          "title": "Google Pixel 7",
          "price": 799.0,
          "currency": "€",
          "year": "2024",
          "stock": 60,
          "imgSrc": "https://m.media-amazon.com/images/I/71GZ3dbKZBL._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 8,
          "title": "Samsung 55\" 4K Smart TV",
          "price": 699.99,
          "currency": "€",
          "year": "2023",
          "stock": 18,
          "imgSrc": "https://m.media-amazon.com/images/I/71oLuYMtMPL._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 9,
          "title": "Apple iPad Pro 11-inch",
          "price": 899.99,
          "currency": "€",
          "year": "2024",
          "stock": 50,
          "imgSrc": "https://m.media-amazon.com/images/I/61XdUvthrbL._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 10,
          "title": "JBL Flip 6 Bluetooth Speaker",
          "price": 129.99,
          "currency": "€",
          "year": "2023",
          "stock": 78,
          "imgSrc": "https://m.media-amazon.com/images/I/71vvcOIHi+L._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 11,
          "title": "GoPro HERO12 Action Camera",
          "price": 549.99,
          "currency": "€",
          "year": "2024",
          "stock": 25,
          "imgSrc": "https://m.media-amazon.com/images/I/61l2P9RV24L._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 12,
          "title": "Apple AirPods Pro (2nd Gen)",
          "price": 249.99,
          "currency": "€",
          "year": "2024",
          "stock": 65,
          "imgSrc": "https://m.media-amazon.com/images/I/41elCMXwakL._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 13,
          "title": "Nintendo Switch OLED Model",
          "price": 359.99,
          "currency": "€",
          "year": "2024",
          "stock": 40,
          "imgSrc": "https://m.media-amazon.com/images/I/71eVf1+jn6L._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 14,
          "title": "Fitbit Charge 6",
          "price": 179.95,
          "currency": "€",
          "year": "2023",
          "stock": 87,
          "imgSrc": "https://m.media-amazon.com/images/I/61Te3kS75nL._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 15,
          "title": "Microsoft Surface Pro 9",
          "price": 1299.99,
          "currency": "€",
          "year": "2024",
          "stock": 22,
          "imgSrc": "https://m.media-amazon.com/images/I/61T3CqIg3-L._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 16,
          "title": "Asus ROG Strix Gaming Laptop",
          "price": 2399.99,
          "currency": "€",
          "year": "2024",
          "stock": 10,
          "imgSrc": "https://m.media-amazon.com/images/I/71DH3FLtlcL._AC_UL480_FMwebp_QL65_.jpg"
        }
      ]
    );
  

    const addProduct = (product) => {
      setProducts((prev) => {
        const updatedProducts = [...prev, product];
        console.log("Updated products:", updatedProducts);
        return updatedProducts;
      });
    };


    const handleIncrease = (id) => {
      //1. copie du state
      const productsCopy = [...products];
      //2. manipuler mon state
      const productsCopyUpdated = productsCopy.map((product) => 
        product.id === id ? { ...product, stock: product.stock + 1} : product
      );
    //3. modifier mon state avec le setter
    setProducts(productsCopyUpdated)
    };
    
    const handleDecrease = (id) => {
      //1. copie du state
      const productsCopy = [...products];
      //2. manipuler mon state
      const productsCopyUpdated = productsCopy.map((product) => product.id === id && product.stock > 0 ?
      { ...product, stock: product.stock - 1} : product
    );
      //3. modifier mon state avec le setter
    setProducts(productsCopyUpdated)
    }
    
    const handleDelete = (id) => {
        //1. copie du state
        const productsCopy = [...products];
    
        //2. manipuler mon state
        const productsCopyUpdated = productsCopy.filter((product) => product.id !== id);
    
        //3. modifier mon state avec le setter
        setProducts(productsCopyUpdated);
      };
    
      // state Edit
      const [editProductId, setEditProductId] = useState(null);
    
      const [editedFields, setEditedFields] = useState({});
    
      const handleEditChange = (field, value) => {
        setEditedFields((prev) => ({...prev, [field]:value}));
      };
    
    const handleEdit = (id, updatedFields) => {
      //1. copie du state
      const productsCopy = [...products];
    
      //2. manipuler mon state
      const productsCopyUpdated = productsCopy.map((product) => product.id === id ? 
      { ...product, ...updatedFields } : product
    );
    
      //3. modifier mon state avec le setter
      setProducts(productsCopyUpdated);
    };

    return (
      <Router>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/add-product">Add Product</Link>
        </nav>
  
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                products={products}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            }
          />
          <Route path="/add-product" element={<AddProduct onAdd={addProduct} />} />
        </Routes>
      </Router>
    );
  };
  
  export default App;