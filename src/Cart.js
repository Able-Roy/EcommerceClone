import React, { useState, useEffect } from "react";
import ProductListItem from "./ProductListItem";

import { useHistory, useParams } from "react-router-dom";

import "./Product.css";
import { NavLink } from "react-router-dom";

const Cart = (props) => {
  return (
    <div className="productList-wrapper">
      {props.cartItems.map((product) => {
        return (
          <ProductListItem
            imageUrl={product.image}
            name={product.title}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
};
export default Cart;
