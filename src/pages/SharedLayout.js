import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import BigScreenNavBar from '../components/BigScreenNavBar'
import MobileNavbar from '../components/MobileNavBar'
import NavBar from '../components/NavBar'

const SharedLayout = () => {
  const value = useSelector((state) => state.navbar.toggleBar)
  return (
    <Wrapper className='section'>
      <div className={value ? 'openContainer' : 'closeContainer'}>
        <div className='navbar'>
          <BigScreenNavBar />
          <MobileNavbar />
        </div>
        <div className='layOut'>
          <NavBar />
          <Outlet />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  @media (min-width: 768px) {
    .openContainer {
      transition: var(--transition);
    }
    .closeContainer {
      margin-left: 150px;
      transition: var(--transition);
    }
  }
`
export default SharedLayout
