import './ProfileStatus.css'

function ProfileStatus() {
  return (
   <section className="profileStatus">
        <div className="profileStatus-box">
            <div className="row d-flex align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="profileStatus-user">
                        <img src="/assets/images/avatar.jpg" alt="user" className="profileStatus-user-img" />
                        <div className="profileStatus-userContent">
                            <h5 className="profileStatus-userContent-name">جان اسنو</h5>
                            <span className="profileStatus-userContent-job">طراح وب</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="profileStatus-info">
                        <div className="profileStatus-infoCard">
                            <h5 className="profileStatus-infoCard-number">24</h5>
                            <h6 className="profileStatus-infoCard-title">دوره</h6>
                        </div>
                        <div className="profileStatus-infoCard">
                            <h5 className="profileStatus-infoCard-number">1,546</h5>
                            <h6 className="profileStatus-infoCard-title">دنبال کننده</h6>
                        </div>
                        <div className="profileStatus-infoCard">
                            <h5 className="profileStatus-infoCard-number">7,890</h5>
                            <h6 className="profileStatus-infoCard-title">لایک</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default ProfileStatus