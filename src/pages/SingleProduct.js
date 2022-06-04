import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { addProductInCart } from '../features/cart/cartReducer'

const SingleProduct = () => {
  const dispatch = useDispatch()
  const { productId } = useParams()
  const { products } = useSelector((state) => state.products)
  const singleProduct = products.find((item) => item.id === productId)
  const { id, name, price, image, description, company } = singleProduct

  // handle singleProduct
  const handleSingleProduct = () => {
    dispatch(addProductInCart(singleProduct))
  }
  return (
    <Wrapper>
      <div className='product' key={id}>
        <div className='img-container'>
          <img src={image} className='img' alt={name} />
        </div>
        <div className='footer'>
          <p>Company : {company}</p>
          <p>$ {(price / 100) * 2}</p>
        </div>
      </div>
      <div className='more-info'>
        <Link className='btn style ' to={`/products`}>
          Back to products
        </Link>
        <Link
          onClick={handleSingleProduct}
          className='btn '
          to={`/products/cart`}
        >
          Add to cart
        </Link>
      </div>
      <hr />
      <h3 className='title'>{name}</h3>
      <div className='title-underline'></div>
      <div className='tile-footer'>
        <p>{description}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .product {
    border: 4px double var(--primary-4);
    box-shadow: var(--shadow-3);
    width: 300px;
    background-color: var(--white);

    transition: var(--transition);
    margin: 2rem auto;
    :hover {
      box-shadow: var(--shadow-5);
    }
  }
  .img-container {
    height: 200px;
    width: 200px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }
  .more-info {
    text-align: center;
  }
  .tile-footer {
    text-align: center;
    p {
      margin: 2rem auto;
    }
  }
  .style {
    margin-right: 2rem;
  }
`
export default SingleProduct
