import { React } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const SharedProductLayout = () => {
  const { isLoading } = useSelector((state) => {
    return state.products
  })
  if (isLoading) {
    return (
      <div>
        <h1 className='title'>Loading....</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default SharedProductLayout
