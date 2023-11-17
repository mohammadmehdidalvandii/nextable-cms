import './CustomerConsent.css'

function CustomerConsent() {
  return (
   <section className="customerConsent">
    <div className="box">
        <div className="row">
            <div className="col-12">
                <div className="consent">
                    <h5 className="title">رضایت مشتری</h5>
                    <div className="consent-title">
                        <h6 className="consent-title-number">98 %</h6>
                        <span className="consent-title-text">امتیاز عملکرد</span>
                    </div>

                    <ul className="consent-items">
                        <li className="consent-item" style={{backgroundColor: "var(--color-blue-2)", color:"var(--color-white)"}} >
                            <span className="consent-item-text">عالی</span>
                            <span className="consent-item-number">65 %</span>
                        </li>
                        <li className="consent-item" style={{backgroundColor: "var(--color-red-1)",}} >
                            <span className="consent-item-text">خیلی خوب</span>
                            <span className="consent-item-number">65 %</span>
                        </li>
                        <li className="consent-item" style={{backgroundColor: "var(--color-yellow-1)",}} >
                            <span className="consent-item-text">خوب</span>
                            <span className="consent-item-number">65 %</span>
                        </li>
                        <li className="consent-item" style={{backgroundColor: "var(--color-blue-1)",}} >
                            <span className="consent-item-text">متوسط</span>
                            <span className="consent-item-number">65 %</span>
                        </li>
                        <li className="consent-item" style={{backgroundColor: "var(--color-green-3)",}} >
                            <span className="consent-item-text">ضعیف</span>
                            <span className="consent-item-number">65 %</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default CustomerConsent