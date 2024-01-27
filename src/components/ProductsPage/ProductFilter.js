import React from 'react'
import styled from 'styled-components'
import {ProductContext} from '../../context/ProductContext'
import { useContext } from 'react'


function ProductFilter() {

    

 const {
    search,
    company,
    handleChange,
    storeProducts
  } = useContext(ProductContext);

  let companies = new Set();
  companies.add('all');
  for (let product in storeProducts) {
    companies.add(storeProducts[product]['company']);
  }

  companies = [...companies];

  return (
    <div className="row my-5">
      <div className="col-10 mx-auto">
        <FilterWrapper>
          {/* text search */}
          <div>
            <label htmlFor="search">Search Products</label>
            <input
              type="text"
              name="search"
              id="search"
              onChange={handleChange}
              value={search}
              className="filter-item"
            />
          </div>

          {/* category search */}
          <div>
            <label htmlFor="company">Company</label>
            <select
              name="company"
              id="company"
              className="filter-item"
              onChange={handleChange}
              value={company}
            >
              {companies.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>
          {/* end of category search */}

          {/* Other filter options can be added here */}
        </FilterWrapper>
      </div>
    </div>
  );

              }




const FilterWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-column-gap: 2rem;
grid-row-gap: 1rem;
label{
    font-weight: bold;
    text-transform: uppercase;
    
}
.filter-item,
.filter-price{
    display:block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
}



`;

export default ProductFilter
