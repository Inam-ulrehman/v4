import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      All copy &copy; Right reserved by INAM {new Date().getFullYear()}{' '}
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  background-color: var(--primary-5);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  color: var(--white);
  text-align: center;
`
export default Footer
