import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import './styles.css';


const App = () => {
    const [products, setProducts] = React.useState([]);
  
    const addProduct = (product) => {
      setProducts((prev) => [...prev, product]);
    };
  return (
    <Router>
      {/* Navigation entre les pages */}
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/add-product">Add Product</Link>
      </nav>

      {/* Routes de l'application */}
      <Routes>
        <Route path="/" element={<Dashboard products={products}/>} />
        <Route path="/add-product" element={<AddProduct onAdd={addProduct}/>} />
      </Routes>
    </Router>
  );
};

export default App;
