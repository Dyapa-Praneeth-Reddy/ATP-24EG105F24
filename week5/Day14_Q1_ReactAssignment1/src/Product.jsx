import React from 'react';

const Product = ({ image, title, category, price, rating }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title" title={title}>{title}</h3>
        <p className="product-category">{category}</p>
        <div className="price-rating">
          <p className="product-price">${price}</p>
          <p className="product-rating">⭐ {rating?.rate} ({rating?.count})</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
