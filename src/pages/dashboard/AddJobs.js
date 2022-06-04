import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import FormRow from '../../components/FormRow'
import { FormRowSelect } from '../../components/FormRowSelect'
import {
  addJobsThunk,
  getPostJobValues,
} from '../../features/jobs/addJobsReducer'

const AddJobs = () => {
  const dispatch = useDispatch()
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
  } = useSelector((state) => state.addJobs)

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      return toast.warn('Please fill in the all details....', {
        position: 'top-center',
      })
    }
    return dispatch(
      addJobsThunk({ position, company, jobLocation, jobType, status })
    )
  }
  // handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getPostJobValues({ name, value }))
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h3 className='title'>post job</h3>
        <div style={{ marginBottom: '1rem' }} className='title-underline'></div>
        {/* Position input */}
        <FormRow
          type='text'
          name='position'
          id='position'
          value={position}
          handleChange={handleChange}
        />
        {/* company input */}
        <FormRow
          type='text'
          name='company'
          id='company'
          value={company}
          handleChange={handleChange}
        />
        {/* jobLocation input */}
        <FormRow
          type='text'
          labelText='Job Location'
          name='jobLocation'
          id='jobLocation'
          value={jobLocation}
          handleChange={handleChange}
        />
        {/* status input */}
        <FormRowSelect
          name='status'
          id='status'
          type='text'
          value={status}
          list={statusOptions}
          handleChange={handleChange}
        />
        {/* jobType input */}
        <FormRowSelect
          name='jobType'
          id='jobType'
          type='text'
          value={jobType}
          list={jobTypeOptions}
          handleChange={handleChange}
        />
        <button disabled={isLoading} type='submit' className='btn btn-block'>
          {isLoading ? 'Posting...' : 'submit'}
        </button>
      </form>
    </div>
  )
}

export default AddJobs
