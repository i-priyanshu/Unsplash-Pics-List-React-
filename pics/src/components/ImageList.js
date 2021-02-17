import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";
const ImageList = (props) => {
  const images = props.images.map((images) => {
    return <ImageCard key={images.id} images={images} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
