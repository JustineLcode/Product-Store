import React from "react";
import { useState } from 'react'


function Dashboard({ products, handleIncrease, handleDecrease, handleDelete, handleEdit }) {

  const [editProductId, setEditProductId] = useState(null);
  const [editedFields, setEditedFields] = useState({});

  const handleEditChange = (field, value) => {
    setEditedFields((prev) => ({ ...prev, [field]: value }));
  };



// affichage
  return (
    <>
    <header>
      <h1>Electronic Store</h1>
    </header>
      <ul className='grid'>         
            {products.map((product) =>(
            
            <li key={product.id} className='cardContainer'>
            {editProductId === product.id ? (
            // Mode édition
            <>
              <input
                type="text"
                defaultValue={product.title}
                onChange={(e) => handleEditChange("title", e.target.value)}
                onBlur={() => {
                  handleEdit(product.id, {
                    ...product, // Utilise les valeurs actuelles si aucun changement
                    ...editedFields,
                  });
                  setEditProductId(null); // Quitter le mode édition
                }}
              />
              <input
                type="number"
                defaultValue={product.price}
                onChange={(e) => handleEditChange("price", parseFloat(e.target.value))}
                onBlur={() => {
          handleEdit(product.id, {
            ...product, // Utilise les valeurs actuelles si aucun changement
            ...editedFields,
          });
          setEditProductId(null); // Quitter le mode édition
        }}
              />
              <input
                type="number"
                defaultValue={product.year}
                onChange={(e) => handleEditChange("year", parseInt(e.target.value, 10))}
                onBlur={() => {
          handleEdit(product.id, {
            ...product, // Utilise les valeurs actuelles si aucun changement
            ...editedFields,
          });
          setEditProductId(null); // Quitter le mode édition
        }}
              />
            </>
          ) : (
            // Mode lecture seule
            <>      
              <p>{product.title}</p>
              <a href="#">
                <img src={product.imgSrc} className="imageProduct" alt="{product.title}" />
              </a>
              <p>Price: {product.price}{product.currency}</p>
              <p>Year: {product.year}</p>
              <p>Stock: {product.stock}</p>
            
              <button onClick={() => handleIncrease(product.id)}>+</button>
              <button onClick={() => handleDecrease(product.id)}>-</button>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
              <button onClick={() => {setEditProductId(product.id);;
                setEditedFields({ title: product.title, price: product.price, year: product.year });
              }}>Edit</button>
              </>
          )}
            </li>          
            )
            )}
        </ul>
    </>
  )
}

export default Dashboard