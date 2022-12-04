import SideBar from './SideBar'
import './Admin.scss'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed}></SideBar>
      </div>
      <FaBars className="btn-toggle" onClick={() => setCollapsed(!collapsed)} />
      <div className="admin-content">Lorem ipsum dolor sit amet.</div>
    </div>
  )
}

export default Admin
