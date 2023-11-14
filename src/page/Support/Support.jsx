import SupportTime from "../../components/Template/support/SupportTime/SupportTime"

function Support() {
  return (
    // style support  custom.css
    <section className="support">
        <div className="row">
            <div className="col-lg-8  ">
            <SupportTime/>
              </div>
            <div className="col-lg-4  ">
                this is col
            </div>
        </div>
    </section>
  )
}

export default Support