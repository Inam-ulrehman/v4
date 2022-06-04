import { React } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { SiWorkplace } from 'react-icons/si'
const BigScreenNavBar = () => {
  const { toggleBar } = useSelector((state) => {
    return state.navbar
  })
  return (
    <Wrapper>
      <div className={toggleBar ? 'container showBar' : 'container'}>
        <div className='color'></div>
        <div className='color color-nav'>
          <NavLink to='dashboard/profile'>
            <CgProfile className='icon' /> Profile
          </NavLink>
          <NavLink to='dashboard/all-jobs'>
            <MdOutlineWorkOutline className='icon' /> Jobs
          </NavLink>
          <NavLink to='dashboard/add-jobs'>
            <SiWorkplace className='icon' /> Add Jobs
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  .showBar {
    margin-left: -300px;
    transition: var(--transition);
  }
  .container {
    transition: var(--transition);
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    background: var(--primary-1);
    height: 100%;
    .color {
      height: 8rem;
      background-color: var(--primary-1);
    }
  }
  .color-nav {
    display: grid;
    a {
      color: var(--primary-7);
      font-size: 1.3rem;
      transition: var(--transition);
      padding-left: 10px;
      :hover {
        padding-left: 1rem;
      }
    }
  }
  .icon {
    color: var(--primary-5);
  }
`

export default BigScreenNavBar
