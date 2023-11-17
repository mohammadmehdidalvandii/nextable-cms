import CustomerConsent from "../../components/Template/support/CustomerConsent/CustomerConsent"
import RecentActivity from "../../components/Template/support/RecentActivity/RecentActivity"
import SupportTime from "../../components/Template/support/SupportTime/SupportTime"
import TicketStatus from "../../components/Template/support/TicketStatus/TicketStatus"

function Support() {
  return (
    // style support  custom.css
    <section className="support">
        <div className="row">
            <div className="col-lg-8  ">
            <SupportTime/>
            <TicketStatus/>
            <CustomerConsent/>
              </div>
            <div className="col-lg-4  ">
                <RecentActivity/>
            </div>
        </div>
    </section>
  )
}

export default Support