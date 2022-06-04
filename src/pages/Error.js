import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1 className='title'>Page not found....</h1>
      <div className='btn-container'>
        <Link className='btn' to='/'>
          Back to home page
        </Link>
      </div>
    </div>
  )
}

export default Error
