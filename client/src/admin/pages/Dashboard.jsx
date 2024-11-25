import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

function Dashboard() {
  const {token,setToken}=useContext(AdminContext)
  alert(token)
  return (
    <div>
      This is the Dashboard for admin 
    </div>
  )
}

export default Dashboard
