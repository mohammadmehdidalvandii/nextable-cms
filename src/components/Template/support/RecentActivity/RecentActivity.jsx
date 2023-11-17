import "./RecentActivity.css";

function RecentActivity() {
  return (
    <section className="recentActivity">
      <div className="box">
        <div className="row">
          <div className="col-12">
            <div className="recentActivity-content">
              <h5 className="title">فعالیت های اخیر</h5>
              <ul className="recentActivity-items">
                <li className="recentActivity-item">
                  <p className="recentActivity-item-paraph">
                    لورم ایپسوم لورم ایپسوم متن ساختگی با تولید سادگی لورم
                    ایپسوم متن ساختگی با
                  </p>
                  <span className="recentActivity-item-time">4 ساعت پیش</span>
                </li>
                <li className="recentActivity-item">
                  <p className="recentActivity-item-paraph">
                    لورم ایپسوم لورم ایپسوم متن ساختگی با تولید سادگی لورم
                    ایپسوم متن ساختگی با
                  </p>
                  <span className="recentActivity-item-time">7 ساعت پیش</span>
                </li>
                <li className="recentActivity-item">
                  <p className="recentActivity-item-paraph">
                    لورم ایپسوم لورم ایپسوم متن ساختگی با تولید سادگی لورم
                    ایپسوم متن ساختگی با
                  </p>
                  <span className="recentActivity-item-time">10 ساعت پیش</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentActivity;
