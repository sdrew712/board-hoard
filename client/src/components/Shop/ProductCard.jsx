import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const ProductCard = ({ id, imageURL, name, price, brand, length }) => {
  return (
    <>
      <Link to={`/shop/${id}`}>
        <Card className="product-card">
          <CardMedia component="img" image={imageURL} alt={`${name} deck`} className="board-img" />
          <CardContent>
            <h3 className="product-name">{name}</h3>
            <div className="product-details-container">
              <p className="product-brand">{brand}</p>
              <p className="product-price">${price}</p>
            </div>
            <p className="product-length">{length}"</p>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default ProductCard;
