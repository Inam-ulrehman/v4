import { React } from 'react'
import styled from 'styled-components'
import { technologies } from '../utils/data'
import HomeThreeSub from './HomeThreeSub'

const HomeThree = () => {
  return (
    <Wrapper>
      <div className='containerBox'>
        <hr />
        <div className='2-colum'>
          <div className='header title'>
            <h4>
              Project <span className='header-span'> / Technologies</span>
            </h4>
            <div className='title-underline'></div>
          </div>
          <div className=''>
            {technologies.map((item) => {
              return <HomeThreeSub key={item.id} {...item} />
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .containerBox {
    margin-top: 12rem;
    @media (min-width: 768px) {
      margin-top: 6rem auto;
    }
  }
  .header-span {
    color: var(--primary-5);
  }
  .box {
    display: grid;
    place-items: center;
  }
  .btn-block {
    margin-top: 1rem;
    padding: 1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .box-p1 {
    text-align: center;
  }
  .hide-box {
    display: none;
  }
`
export default HomeThree
