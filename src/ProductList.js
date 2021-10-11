import React, { useState, useEffect } from "react";
import ProductListItem from "./ProductListItem";

import "./productList.css";
import { NavLink } from "react-router-dom";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, [productList]);

  return (
    <div className="productList-wrapper">
      {productList.map((product) => {
        return (
          <NavLink to={"/product/" + product.id} key={product.id}>
            <ProductListItem
              imageUrl={product.image}
              name={product.title}
              description={product.description}
              price={product.price}
            />
          </NavLink>
        );
      })}
    </div>
  );
};
export default ProductList;
