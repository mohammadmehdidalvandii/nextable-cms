import './StatusCustomer.css'
import CardStatus from '../CardStatus/CardStatus'
import db from '../../../../Data/db.json'
import { useState } from 'react'

function StatusCustomer() {
    const[customers ,setCoustomers] = useState(db.customersStatus)

  return (
    <section className='statusCustomer'>
        <h5 className="title">وضعیت درخواست کاربر</h5>
        {customers.map(customer=>(
            <CardStatus 
             key={customer.id}
             {...customer}
             />
        ))}
    </section>
  )
}

export default StatusCustomer