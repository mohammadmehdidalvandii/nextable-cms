import './NewCustomer.css'
import CardNewCustomer from '../CardNewCustomer/CardNewCustomer'
function NewCustomer() {
 
  return (
    <div className="newCustomer">
        <h5 className="title">مشتریان جدید</h5>
        <CardNewCustomer/>
        <CardNewCustomer/>
        <CardNewCustomer/>
        <CardNewCustomer/>
    </div>
  )
}

export default NewCustomer