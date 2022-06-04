import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import FormRow from '../../components/FormRow'
import {
  getProfileValues,
  profileUpdateThunk,
} from '../../features/user/editUserReducer'

const Profile = () => {
  const dispatch = useDispatch()
  const { profile } = useSelector((state) => state.editUser)

  // handleSubmit

  const handleSubmit = (e) => {
    const { name, lastName, email, location } = profile
    e.preventDefault()
    if (!name || !lastName || !email || !location) {
      toast.warn('Please fill in the all fields...', {
        position: 'top-center',
      })
    }
    return dispatch(profileUpdateThunk(profile))
  }

  // handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getProfileValues({ name, value }))
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <h3 className='title'>Profile</h3>
        <div className='title-underline'></div>
        {/* name Input */}
        <FormRow
          name='name'
          id={profile.name}
          type='text'
          value={profile.name}
          handleChange={handleChange}
        />
        {/* lastName Input */}
        <FormRow
          name='lastName'
          labelText='Last Name'
          id={profile.lastName}
          type='text'
          value={profile.lastName}
          handleChange={handleChange}
        />
        {/* email Input */}
        <FormRow
          name='email'
          id={profile.email}
          type='email'
          value={profile.email}
          handleChange={handleChange}
        />
        {/* name Input */}
        <FormRow
          name='location'
          id={profile.location}
          type='text'
          value={profile.location}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Profile
