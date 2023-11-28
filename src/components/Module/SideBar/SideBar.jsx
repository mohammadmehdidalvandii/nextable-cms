import './SideBar.css'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
function SideBar() {
    const [activeMenu , setActiveMenu ] =useState('/')
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
                <NavLink to='/'  className={`sideBarMenu-link ${activeMenu === '/' ?'sideBarMenu-linkActive' : ''}`}>فروش</NavLink>
            </li>
            <li className="sidebarMenu">
                <NavLink to='/Management'  className={`sideBarMenu-link ${activeMenu === '/Management' ?'sideBarMenu-linkActive' : ''}`}>مدیریت</NavLink>
            </li>
            <li className="sidebarMenu">
                <NavLink to='/Support' className={`sideBarMenu-link ${activeMenu === '/Support' ?'sideBarMenu-linkActive' : ''}`}>پشتیبانی</NavLink>
            </li>
            <li className="sidebarMenu">
                <NavLink to='/Statistics'  className={`sideBarMenu-link ${activeMenu === '/Statistics' ?'sideBarMenu-linkActive' : ''}`}>امار وب سایت</NavLink>
            </li>
            <li className="sidebarMenu">
                <NavLink to='/Profile'  className={`sideBarMenu-link ${activeMenu === '/Profile' ?'sideBarMenu-linkActive' : ''}`}>پروفایل</NavLink>
            </li>
        </ul>
    </div>
   </aside>
  )
}

export default SideBar