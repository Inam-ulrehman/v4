import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleDeleteJob } from '../features/jobs/jobsReducer'
import { getEditValuesHoldJobs } from '../features/jobs/editJobsReducer'

const JobsHolder = ({
  company,
  createdAt,
  jobLocation,
  jobType,
  position,
  status,
  _id: id,
}) => {
  const dispatch = useDispatch()

  // handleDelete
  const handleDelete = (e) => {
    dispatch(handleDeleteJob(id))
  }

  // handleEdit
  const handleEdit = (e) => {
    dispatch(
      getEditValuesHoldJobs({
        company,
        position,
        jobLocation,
        jobType,
        status,
        id,
      })
    )
  }

  return (
    <Wrapper className='container'>
      <div className='box one'>
        <h3 className='title'>{company}</h3>
        <p className='title'>{position}</p>
      </div>
      <hr style={{ margin: '0 1rem' }} />
      <div className='box two'>
        <p>{jobLocation}</p>
        <p>{jobType}</p>
      </div>
      <div>
        <p className={` ${status}`}>{status}</p>
      </div>
      <div style={{ marginLeft: '5px' }} className='box three'>
        <div>
          <p> Created At : {moment(createdAt).format('MMM Do YY')}</p>
        </div>
      </div>
      <hr />
      <div className='box four'>
        <Link
          onClick={handleEdit}
          className='btn editBtn'
          to='/dashboard/edit-jobs'
        >
          edit
        </Link>
        <button onClick={handleDelete} type='button' className='btn deleteBtn'>
          delete
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width: 300px;
  border: 4px double var(--primary-5);

  @media (max-width: 992px) {
    border: 4px double var(--primary-5);
    margin: 1rem auto;

    max-width: 300px;
  }
  .box {
    p,
    h3 {
      margin: 0;
    }
  }
  .two {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }
  .four {
    display: flex;
    justify-content: space-between;
  }
  .editBtn {
  }
  .deleteBtn {
    background-color: var(--red-light);
    color: var(--grey-5);
    :hover {
      color: var(--grey-7);
    }
  }

  .interview {
    background: var(--green-light);
    width: 90px;
    margin: 0 auto;
    text-align: center;
  }
  .pending {
    background: var(--red-light);
    width: 90px;
    margin: 0 auto;
    text-align: center;
  }
  .declined {
    background: var(--red-dark);
    color: white;
    width: 90px;
    margin: 0 auto;
    text-align: center;
  }
`
export default JobsHolder
