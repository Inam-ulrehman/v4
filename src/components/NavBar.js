import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { logOut } from '../features/user/userReducer'
import { HiOutlineMenu } from 'react-icons/hi'
import { openNavbar, toggleBar } from '../features/navbar/navbarReducer'

const NavBar = () => {
  const dispatch = useDispatch()
  const { cart, user } = useSelector((state) => state)
  const { cartAmount } = cart
  const { serverUser } = user

  // handleLogeOut
  const handleLogOut = () => {
    dispatch(logOut())
  }

  return (
    <Wrapper>
      <div className='container'>
        <div className='link'>
          <NavLink to='/'>Home</NavLink>
          {serverUser.length === 0 ? (
            <NavLink to='/Login'>Login</NavLink>
          ) : (
            <NavLink onClick={handleLogOut} to='/login'>
              logout
            </NavLink>
          )}
        </div>
        <div className='link'>
          <NavLink to='/products'>Products</NavLink>
          <NavLink to='/products/cart'>
            / Cart <span className='amount'>{cartAmount}</span>
          </NavLink>
        </div>
      </div>
      <div className='user-menu'>
        <p>
          Hello, <span>{serverUser.name}</span>
        </p>
        <button
          onClick={() => {
            dispatch(openNavbar())
            dispatch(toggleBar())
          }}
          type='button'
          className='btn'
        >
          <HiOutlineMenu />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  .container {
    display: flex;
    justify-content: space-between;

    background: var(--white);
  }

  a {
    color: var(--grey-5);
    transition: var(--transition);
  }
  .active {
    color: var(--primary-5);
    background-color: var(--primary-1);

    border-radius: var(--radius);
  }
  .link {
    padding: 1rem 0px;
    a {
      padding: 18px;
    }
  }
  .amount {
    color: var(--grey-5);
  }

  /* user-menu */
  .user-menu {
    background: rgb(0, 0, 0, 0.6);
    display: flex;
    justify-content: space-between;

    p {
      margin: 0;
      color: var(--white);
      span {
        color: var(--primary-5);
      }
    }
  }
`
export default NavBar
