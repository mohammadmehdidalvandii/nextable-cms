import './SaleReports.css'
import Reports from '../Reports/Reports'
import RegionSale from '../RegionSale/RegionSale'

function SaleReports() {
  return (
    <section className="saleReports">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="box">
                        <Reports/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="box">
                    <RegionSale/>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default SaleReports