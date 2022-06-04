import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedDashboardLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default SharedDashboardLayout
