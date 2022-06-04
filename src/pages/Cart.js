import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {
  clearCart,
  decreaseAmount,
  increaseAmount,
  removeSingleItem,
} from '../features/cart/cartReducer'

const Cart = () => {
  const dispatch = useDispatch()
  const { cartItems, cartTotal } = useSelector((state) => state.cart)

  // clearCart

  const handleClearCart = (e) => {
    dispatch(clearCart())
  }

  // RemoveItem

  const handleRemoveItem = (id) => {
    dispatch(removeSingleItem(id))
  }

  // increase

  const handleIncrease = (id) => {
    dispatch(increaseAmount(id))
  }
  // decrease

  const handleDecrease = (id, amount) => {
    if (amount <= 1) {
      return dispatch(removeSingleItem(id))
    }
    return dispatch(decreaseAmount(id, amount))
  }

  return (
    <Wrapper>
      <div className='cart-container'>
        {cartItems.map((item) => {
          const { id, image, price, shipping, name, amount } = item

          return (
            <div key={id} className='cart'>
              <div className='img-container'>
                <img src={image} alt={name} className='img' />
              </div>
              <div className='information'>
                <div className='information-header'>
                  <h4>{name}</h4>
                  <p className={shipping ? 'in-stock' : 'out-of-stock'}>
                    {shipping ? 'In-Stock' : 'Out of stock'}
                  </p>
                </div>
                <div className='information-footer'>
                  <p>${(price / 100) * 2}</p>
                  <button
                    onClick={() => handleRemoveItem(id)}
                    type='button'
                    className='btn remove'
                  >
                    remove
                  </button>
                </div>
              </div>
              {shipping && (
                <div className='increase-decrease '>
                  <button
                    onClick={() => handleIncrease(id)}
                    type='button'
                    className='increase btn'
                  >
                    +
                  </button>
                  <p className='quantity'>{amount}</p>
                  <button
                    className='decrease btn'
                    onClick={() => handleDecrease(id, amount)}
                  >
                    -
                  </button>
                </div>
              )}
            </div>
          )
        })}
        <hr />
        <div className='total'>
          <p>Total bill :</p>
          <p> {(cartTotal / 100) * 2} $</p>
        </div>
        <div className='btn-container'>
          <button
            onClick={handleClearCart}
            type='button'
            className='btn remove'
          >
            clear cart
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .cart-container {
    padding: 1rem;
  }
  .cart {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    border: 5px double var(--primary-5);
    margin-bottom: 2rem;
    place-items: center;
    text-align: center;
    max-width: 650px;
    margin: 2rem auto;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    :hover {
      box-shadow: var(--shadow-4);
    }
  }
  .img-container {
    height: 100px;
    width: 100px;

    img {
      height: 100px;
      width: 100px;
      object-fit: cover;
      border-radius: var(--radius);
    }
  }
  .in-stock {
    background: var(--green-light);
    width: 100px;
    margin: 0 auto;
    border-radius: var(--radius);
    color: var(--grey-5);
  }
  .out-of-stock {
    background: var(--red-light);
    width: 100px;
    margin: 0 auto;
    border-radius: var(--radius);
    color: var(--grey-8);
  }
  .remove {
    background: var(--red-light);
    color: var(--grey-7);
    transition: var(--transition);
    margin-bottom: 4px;
    :hover {
      background-color: var(--red-dark);
      color: var(--white);
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
  }
`
export default Cart
