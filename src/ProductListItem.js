import React, { useState } from "react";

const ProductListItem = (props) => {
  return (
    <div className="productList-item">
      <img src={props.imageUrl} alt="product" />
      <div className="product-description">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
};
export default ProductListItem;
