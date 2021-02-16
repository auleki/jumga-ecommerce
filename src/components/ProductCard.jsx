import React from 'react'
import { JustifiedRow, StyledProductCard, Button } from "./styledComponents";

const ProductCard = ({ footWear, addToCart }) => {
  const { modelName, brandName, price, modelNumber, shoeImage } = footWear;

  
  
  return (
    <StyledProductCard>
      <JustifiedRow> 
        <div className="product_name">
          <span>{modelName}</span>
          <span className="special">{brandName}</span>
        </div>
        <div className="product_price">
          <p>${price}</p>
        </div>
      </JustifiedRow>
      <div className="product_image">
        <img 
          src={shoeImage} 
          alt="product" 
          />
      </div>
      <JustifiedRow>
        <div>
          <Button onClick={() => addToCart(footWear)}>
            <span>Add to cart</span>
            <i className="ri-shopping-cart-2-line icon"></i>
          </Button>
        </div>
        <div>
          <span className="special">
            {modelNumber}
          </span>
        </div>
      </JustifiedRow>
    </StyledProductCard>
  )
}

export default ProductCard