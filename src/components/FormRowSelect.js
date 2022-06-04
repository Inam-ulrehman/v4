import React from 'react'

export const FormRowSelect = ({
  name,
  labelText,
  value,
  handleChange,
  list,
}) => {
  return (
    <div>
      <label className='form-label' htmlFor={name}>
        {labelText || name}
      </label>
      <select
        className='form-input'
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      >
        {list.map((options, index) => {
          return (
            <option key={index} value={options}>
              {options}
            </option>
          )
        })}
      </select>
    </div>
  )
}
