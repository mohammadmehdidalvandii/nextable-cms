import './AddActivity.css'

function AddActivity() {
  return (
    <section className="addActivity">
        <div className="box">
            <h5 className="title">اشتراک گذاری فعالیت</h5>
            <textarea  className="addActivity-desc" placeholder='متن مورد نظر خود را وارد کنید'></textarea>
            <div className="addActivity-file-btn">
                <button className="addActivity-btn">ارسال</button>
                <input type="file" className='addActivity-file' />
            </div>
        </div>
    </section>
  )
}

export default AddActivity