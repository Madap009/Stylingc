import React, {useContext} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaSearch,FaCartPlus} from 'react-icons/fa'
import {ProductContext} from '../context/ProductContext'

function Product({product}) {
    const value = useContext(ProductContext);
  const { addToCart, setSingleProduct } = value;

  const handleAddToCart = (productId) =>{
    console.log('Adding to cart:' ,productId);
    addToCart(productId);
  }

  const handleSetSingleProduct = (productId) =>{
    console.log('settingsingle :' ,productId);
    setSingleProduct(productId);
  }


  return (
    <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
      <div className="card">
        <div className="img-container">
          <img src={product.image} alt="Productimage" className="card-img-top p-5" style={{ height: '320px' }} />

          <div className="product-icons">
            <Link to={`/products/${product.id}`} onClick={() => handleSetSingleProduct(product.id)}>
              <FaSearch className="icon"></FaSearch>
            </Link>
            <FaCartPlus className="icon" onClick={() => handleAddToCart(product.id)}></FaCartPlus>
          </div>
        </div>

        <div className="card-body d-flex justify-content-between">
          <p className="mb-0">{product.title}</p>
          <p className="mb-0 text-main"> Rs.{product.price}</p>
        </div>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
.card{
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
    transition: var(--mainTransition);
    height: 100%
}
.card:hover{
    box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.5);
    cursor:pointer;
}
.card-img-top{
    transition: var(--mainTransition);
}

.card:hover .card-img-top{
    transform: scale(1.5);
    opacity: 0.2;
}
.img-container{
position:relative
}
.product-icons{
    transition: var(--mainTransition);
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    opacity: 0;
}
.icon{
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color:var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;

}
.card:hover .product-icons{
opacity:1;
}

.card-body{
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
}

`
export default Product
