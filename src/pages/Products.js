import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Products = () => {
  const { products } = useSelector((state) => state.products)

  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, price, name } = product
        return (
          <div className='product' key={id}>
            <div className='img-container'>
              <img src={image} className='img' alt={name} />
            </div>
            <div className='footer'>
              <p>{name}</p>
              <p> ${(price / 100) * 2}</p>
            </div>
            <div className='more-info'>
              <Link className='btn btn-block' to={`/products/${id}`}>
                More info
              </Link>
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1126px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .product {
    border: 4px double var(--primary-4);
    box-shadow: var(--shadow-3);
    width: 250px;
    background-color: var(--white);

    transition: var(--transition);
    margin: 2rem auto;

    :hover {
      box-shadow: var(--shadow-5);
    }
  }
  .img-container {
    width: 240px;
    height: 200px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }
  .more-info {
    text-align: center;
  }
`
export default Products
