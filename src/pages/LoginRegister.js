import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import FormRow from '../components/FormRow'
import Loading from '../components/Loading'
import { toast } from 'react-toastify'

import {
  getFormValues,
  handleLoginUserThunk,
  handleRegisterUserThunk,
  toggleFormValues,
} from '../features/user/userReducer'
import { useNavigate } from 'react-router-dom'

const LoginRegister = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { name, email, password, isMember, isLoading, serverUser } =
    useSelector((state) => state.user)

  // onSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password || (!isMember && !name)) {
      return toast.error('Please provide all details...', {
        position: 'top-center',
      })
    }
    if (isMember) {
      return dispatch(handleLoginUserThunk({ email, password }))
    }
    return dispatch(handleRegisterUserThunk({ name, email, password }))
  }

  // handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    dispatch(getFormValues({ name, value }))
  }

  // handleToggleButton

  const handleToggleButton = (e) => {
    dispatch(toggleFormValues())
  }
  useEffect(() => {
    if (serverUser.length === 0) {
    } else {
      navigate('/')
    }
  })

  if (isLoading) {
    return <Loading />
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className='form'>
        <h3 className='title'>{isMember ? 'Login' : 'Register'}</h3>
        {/* name input */}
        {!isMember && (
          <FormRow
            className='form-input'
            type='text'
            name='name'
            id='name'
            value={name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          className='form-input'
          type='email'
          name='email'
          id='email'
          value={email}
          handleChange={handleChange}
        />
        {/* name input */}
        <FormRow
          className='form-input'
          type='password'
          name='password'
          id='password'
          value={password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          {isMember ? 'Are you Register ? ' : 'Are you member ? '}{' '}
          <button
            className='style-btn'
            onClick={handleToggleButton}
            type='button'
          >
            {' '}
            {isMember ? 'Register' : 'Login'}{' '}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .style-btn {
    background: var(--primary-5);
    border: transparent;
    color: white;
    padding: 5px;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    :hover {
      background: var(--primary-7);
    }
  }
`

export default LoginRegister
