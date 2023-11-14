import './SupportTime.css'

function SupportTime() {
  return (
    <section className="supportTime">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="box">
                    <div className="supportTime-content">
                        <h5 className="title">زمان رسیدگی به شکایت</h5>
                        <p className="SupportTime-description">میانگین زمان رسیدگی به شکایات.</p>
                        <span className="SupportTime-time">7 دقیقه</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="box">
                    <div className="supportTime-content">
                        <h5 className="title">میانگین سرعت پاسخ</h5>
                        <p className="SupportTime-description">سرعت عمل اعضای پشتیبانی را بسنجید.</p>
                        <span className="SupportTime-time">2 دقیقه</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default SupportTime