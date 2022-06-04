import { React, useState } from 'react'

const HomeThreeSub = ({ id, name, Description }) => {
  const [values, setValues] = useState(true)
  return (
    <div key={id} className='box'>
      <button
        onClick={() => setValues(!values)}
        type='button'
        className='btn btn-block'
      >
        {name}
      </button>

      <p className={values ? ' box-p1 hide-box' : ''}>{Description}</p>
    </div>
  )
}

export default HomeThreeSub
