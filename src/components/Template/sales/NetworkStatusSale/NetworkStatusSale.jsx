import './NetworkStatusSale.css'
import NetworkSale from '../NetworkSale/NetworkSale'
import StatusSales from '../StatusSales/StatusSales'

function NetworkStatusSale() {
  return (
    <section className="networkStatusSale">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="box">
                    <NetworkSale/>  
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="box">
                    <StatusSales/>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default NetworkStatusSale