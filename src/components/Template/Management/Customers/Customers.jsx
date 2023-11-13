import NewCustomer from '../NewCustomer/NewCustomer'
import StatusCustomer from '../StatusCustomer/StatusCustomer'
import './Customers.css'
function Customers() {
  return (
   <section className="customers">
    <div className="row">
        <div className="col-lg-6 col-md-12">
            <div className="box">
                <NewCustomer/>
            </div>
        </div>
        <div className="col-lg-6 col-md-12">
            <div className="box">
                <StatusCustomer/>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Customers