import "./Navbar.css";
import { NavLink} from "react-router-dom";
import { BiSolidBellRing, BiMessage, BiSearchAlt2 } from "react-icons/bi";


function Navbar() {
  
  return (
    <section className="navBar">
      <div className="navBar-wrapper">
        <div className="navBarRight">
          <div className="navBarRight-content">
            <h4 className="navBarRight-content-title">داشبورد</h4>
            <div className="navBarRight-content-textLink">
              <span className="navBarRight-content-text">داشبورد</span>/
              <span className="navBarRight-content-link">فروش</span>
            </div>
          </div>
        </div>
        <div className="navBarLeft">
        <div className="navBarLeft-search">
            <input type="text" className="navBarLeft-search-input"  placeholder="جستجو..."/>
            <BiSearchAlt2 className="navBarLeft-search-icon"/>
        </div>

          <div className="navBarLeft-alert">
            <div className="navBarLeft-Box">
              <BiSolidBellRing className="navBarLeft-alert-icon" />
            </div>
          </div>


          <div className="navBarLeft-message">
            <div className="navBarLeft-Box">
              <BiMessage className="navBarLeft-message-icon" />
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
    </section>
  );
}

export default Navbar;
