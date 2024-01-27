import React from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context'

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="container py-3">
     <div className="row">
     <div className="col-md-6">
<p className="text-capitalize"> copyright &copy; TechVerse {new Date().getFullYear()}. all
rights reserved{""} </p>
     </div>
          
     </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
background: var(--darkGrey);
color: var(--mainWhite);
.icon{
  font-size: 1.5rem;
  color: var(--mainWhite);
  transition: var(--mainTransition);

}
.icon:hover{
  color:var(--primaryColor);
  cursor: pointer;
}


`