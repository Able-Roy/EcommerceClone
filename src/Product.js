import React, { useState, useEffect, useContext } from "react";
import ProductListItem from "./ProductListItem";

import { useHistory, useParams } from "react-router-dom";

import "./Product.css";
import { Context } from "./Hoc";
import { NavLink } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const cartContext = useContext(Context);
  console.log("cartContext", cartContext);
  const addCartHandler = () => {
    cartContext.setCart(cartContext.cart.push(product));
  };
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);
  return (
    <div className="product-detail-wrapper">
      <img src={product.image} alt="Product" />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span>{product.price}</span>
        <button onClick={addCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
};
export default Product;
