import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import JobsHolder from '../../components/JobsHolder'
import { getAllJobs } from '../../features/jobs/jobsReducer'

const AllJobs = () => {
  const dispatch = useDispatch()
  const { job, deletingJob } = useSelector((state) => state.jobs)

  //  all jobs use effect

  useEffect(() => {
    dispatch(getAllJobs())
    // eslint-disable-next-line
  }, [deletingJob])
  return (
    <Wrapper>
      {job.map((item, index) => {
        return <JobsHolder key={index} {...item} />
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top: 1rem;
  text-align: center;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    text-align: center;
    max-width: 900px;
    gap: 1rem;
    margin-left: 1rem;
  }
`
export default AllJobs
