import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { BiSolidBellRing, BiMessage, BiSearchAlt2 } from "react-icons/bi";
import { useEffect, useState } from "react";



function Navbar() {
  const [menuMsg ,setMenuMsg] =useState(false)
  const [menuAlert , setMenuAlert] =useState(false)
  const [title , setTitle] =useState('')


  const location = useLocation()


  useEffect(()=>{
    const pathName = location.pathname
    if(pathName === '/'){
      setTitle('فروش')
    } else if(pathName === '/Management'){
      setTitle('مدیریت')
    } else if(pathName === '/Support'){
      setTitle('پشتیبانی')
    } else if(pathName === '/Statistics'){
      setTitle('آمار وب سایت')
    }

  
  },[location])



  const handlerMenuAlert = ()=>{
    setMenuAlert(!menuAlert)
  }

  const handlerMenuMsg = ()=>{
    setMenuMsg(!menuMsg)
  }


  return (
    <section className="navBar">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="navBarRight">
            <div className="navBarRight-content">
              <h4 className="navBarRight-content-title">{title}</h4>
              <div className="navBarRight-content-textLink">
                <span className="navBarRight-content-text">داشبورد</span>/
                <span className="navBarRight-content-link">{title}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="navBarLeft">
            <div className="navBarLeft-search">
              <input
                type="text"
                className="navBarLeft-search-input"
                placeholder="جستجو..."
              />
              <BiSearchAlt2 className="navBarLeft-search-icon" />
            </div>


            <div className="navBarLeft-message">
              <div className="navBarLeft-Box" onClick={handlerMenuMsg} >
                <BiMessage className="navBarLeft-message-icon" />
              </div>

              <div className="navBarLeft-message-box" style={{display: menuMsg ?"block":"none"}}>
                <ul className="message-items">
                  <li className="message-item">
                    <img src="/assets/images/avatar.jpg" alt="user" className="message-item-img" />
                    <div className="message-item-nameText">
                      <h6 className="message-item-name">جان اسنو</h6>
                      <span className="message-item-text">لورم اپیسوم متن ساختگی</span>
                    </div>
                  </li>
                  <li className="message-item">
                    <img src="/assets/images/avatar.jpg" alt="user" className="message-item-img" />
                    <div className="message-item-nameText">
                      <h6 className="message-item-name">جان اسنو</h6>
                      <span className="message-item-text">لورم اپیسوم متن ساختگی</span>
                    </div>
                  </li>
                  <li className="message-item">
                    <img src="/assets/images/avatar.jpg" alt="user" className="message-item-img" />
                    <div className="message-item-nameText">
                      <h6 className="message-item-name">جان اسنو</h6>
                      <span className="message-item-text">لورم اپیسوم متن ساختگی</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>


            <div className="navBarLeft-alert">
              <div className="navBarLeft-Box" onClick={handlerMenuAlert}>
                <BiSolidBellRing className="navBarLeft-alert-icon" />
              </div>

              <div className="navBarLeft-alert-box" style={{display: menuAlert ?"block":"none"}}>
                <ul className="alert-items">
                  <li className="alert-item">
                    <h5 className="alert-item-title">جان اسنو</h5>
                    <span className="alert-item-text">لورم اپیسوم متن ساختگی</span>
                    <span className="alert-item-time">4 ساعت پیش</span>
                  </li>
                  <li className="alert-item">
                    <h5 className="alert-item-title">جان اسنو</h5>
                    <span className="alert-item-text">لورم اپیسوم متن ساختگی</span>
                    <span className="alert-item-time">4 ساعت پیش</span>
                  </li>
                  <li className="alert-item">
                    <h5 className="alert-item-title">جان اسنو</h5>
                    <span className="alert-item-text">لورم اپیسوم متن ساختگی</span>
                    <span className="alert-item-time">4 ساعت پیش</span>
                  </li>
                </ul>
              </div>
            </div>

           

            <NavLink to="/" className="navBarLeft-pageAdmin">
              <img
                src="/assets/images/avatar.jpg"
                alt=""
                className="navBarLeft-pageAdmin-img"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
