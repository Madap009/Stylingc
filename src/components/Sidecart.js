import React, {useContext} from 'react'
import {ProductContext} from '../context/ProductContext'
import styled from 'styled-components'
import {Link} from 'react-router-dom'



function Sidecart() {
    
    const value = useContext(ProductContext);
  const { cartOpen, closeCart, cart, cartTotal } = value;

  return (
    <CartWrapper show={cartOpen} onClick={closeCart}>
      <ul>
        {cart.map((item) => {
          console.log(item);
          return (
            <li key={item.id} className="cart-item mb-4">
              <img width="35px" src={`../${item.image}`} alt="cart item" />
              <div className="mt-3">
                <h6 className="text-uppercase">{item.title}</h6>
                <h6 className="text-title text-capitalize">Amount: {item.count}</h6>
              </div>
            </li>
          );
        })}
      </ul>
      <h4 className="text-capitalize text-main">Cart Total: Rs.{cartTotal} </h4>
      <div className="text-center my-5">
        <Link to="/cart" className="main-link">
          Cart Page
        </Link>
      </div>
    </CartWrapper>
  );
}

const CartWrapper  = styled.div`
position:fixed;
top: 60px;
right: 0%;
width: 100%;
height: 100%;
background: var(--mainGrey);
z-index: 1;
border-left: 4px solid var(--primaryColor);
transform: ${props=> props.show?'translateX(0)':'translate(100%)'};
transition: var(--mainTransition);

@media(min-width:576px){
    width: 20rem;
}
overflow:scroll;
padding:2rem;
ul{
    padding:0 !important;
}

.cart-item{
    list-style : none;
}


`

export default Sidecart
