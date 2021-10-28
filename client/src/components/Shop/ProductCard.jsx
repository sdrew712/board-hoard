import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProductCard = ({ id, imageURL, name, price, brand, category, flex, description, length, width, wheelbase }) => {
  return (
    <>
      <Link to={`/shop/${id}`} style={{ textDecoration: "none" }}>
        <Card sx={{ maxWidth: 250, margin: 1, height: 520 }}>
          <CardMedia
            component="img"
            image={imageURL}
            alt={`${name} deck`}
            style={{ width: "250px", paddingTop: "1rem", paddingBottom: "1rem" }}
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
