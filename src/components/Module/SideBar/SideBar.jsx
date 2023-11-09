import './SideBar.css'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
function SideBar() {
    const [activeMenu , setActiveMenu ] =useState('/Sale')
    const location = useLocation()

    useEffect(()=>{
        const pathName = location.pathname
        setActiveMenu(pathName)
        window.scroll(0,0)
    },[location])

  return (
   <aside className="sidebar">
    <div className="sidebar-wrapper">
        <img src="/assets/images/logo.png" alt="logo" className="sidebar-image" />

            <h5 className="sidebar-title">داشبورد</h5>
        <ul className="sidebarMenus">
            <li className="sidebarMenu">
                <NavLink to='/Sale' className={`sideBarMenu-link ${activeMenu === '/Sale' ?'sideBarMenu-linkActive' : ''}`}>فروش</NavLink>
            </li>
            <li className="sidebarMenu">
                <NavLink to='/' className={`sideBarMenu-link ${activeMenu === '/' ?'sideBarMenu-linkActive' : ''}`}>مدیریت</NavLink>
            </li>
            <li className="sidebarMenu">
                <NavLink to='/' className={`sideBarMenu-link ${activeMenu === '/' ?'sideBarMenu-linkActive' : ''}`}>پشتیبانی</NavLink>
            </li>
            <li className="sidebarMenu">
                <NavLink to='/' className={`sideBarMenu-link ${activeMenu === '/' ?'sideBarMenu-linkActive' : ''}`}>امار وب سایت</NavLink>
            </li>
        </ul>
    </div>
   </aside>
  )
}

export default SideBar