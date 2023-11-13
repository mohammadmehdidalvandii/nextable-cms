import './CardNewCustomer.css'
import { useState } from 'react'
import {BsDot} from 'react-icons/bs'
function CardNewCustomer() {
    const [menuCustomer ,setMenuCustomer] =useState(false)
    const handlerMenuCustomer= ()=>{
        setMenuCustomer(!menuCustomer)
    }
  return (
    <div className="cardNewCustomer">
    <div className="cardNewCustomer-imgNameJob">
    <img src="/assets/images/avatar.jpg" alt="customer-image" className="cardNewCustomer-img" />
    <div className="cardNewCustomer-nameJob">
        <h6 className="cardNewCustomer-name">تونی استارک</h6>
        <span className="cardNewCustomer-job">مهندس</span>
    </div>
    </div>
    <button className="cardCustomer" onClick={handlerMenuCustomer}>
        <BsDot/>
        <BsDot/>
    </button>
    <ul className="menuCustomer" style={{display: menuCustomer ? "block":"none"}}>
        <li className="menuCustomer-item">مشاهده</li>
        <li className="menuCustomer-item">پیام دادن</li>
        <li className="menuCustomer-item">اختصاص دادن</li>
    </ul>
</div>
  )
}

export default CardNewCustomer