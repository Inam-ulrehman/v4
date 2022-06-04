import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { closeNavbar } from '../features/navbar/navbarReducer'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { SiWorkplace } from 'react-icons/si'

const MobileNavbar = () => {
  const dispatch = useDispatch()
  const { isNavBarOpen } = useSelector((state) => {
    return state.navbar
  })
  return (
    <Wrapper>
      {isNavBarOpen && (
        <div className='modal-container '>
          <div className='modal'>
            <button onClick={() => dispatch(closeNavbar())} type='button'>
              x
            </button>
            <NavLink
              onClick={() => dispatch(closeNavbar())}
              to='dashboard/profile'
            >
              <CgProfile /> Profile
            </NavLink>
            <NavLink
              onClick={() => dispatch(closeNavbar())}
              to='dashboard/all-jobs'
            >
              <MdOutlineWorkOutline></MdOutlineWorkOutline> Jobs
            </NavLink>
            <NavLink
              onClick={() => dispatch(closeNavbar())}
              to='dashboard/add-jobs'
            >
              <SiWorkplace /> Add Jobs
            </NavLink>
          </div>
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  .modal {
    display: grid;
    a {
      padding: 1rem;
      color: var(--primary-5);
      text-align: center;
      justify-content: center;
      transition: var(--transition);
      :hover {
        padding-left: 1.5rem;
      }
    }
    button {
      font-size: 1.7rem;
      color: red;
      font-weight: 600;
      background: transparent;
      border: transparent;
      width: 20px;
      padding: 0px;
      transition: var(--transition);
      :hover {
        transform: scale(1.4);
      }
    }
  }
`
export default MobileNavbar
