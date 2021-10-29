import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProductCard = ({ id, imageURL, name, price, brand, category, flex, length }) => {
  return (
    <>
      <Link to={`/shop/${id}`} style={{ textDecoration: "none" }}>
        <Card className="product-card">
          <CardMedia
            component="img"
            image={imageURL}
            alt={`${name} deck`}
            className="board-img"
            style={{ width: "250px", paddingTop: "20px", paddingBottom: "10px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              ${price}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {brand}
            </Typography>
            <Typography variant="body" color="text.secondary">
              {category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {length}"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {flex}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default ProductCard;