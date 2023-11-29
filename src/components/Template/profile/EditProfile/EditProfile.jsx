import "./EditProfile.css";

function EditProfile() {
  return (
    <section className="editProfile">
      <div className="box">
        <h5 className="title">اطلاعات</h5>
        <ul className="editProfile-items">
          <li className="editProfile-item">
            <span className="editProfile-item-title">نام :</span>
            <span className="editProfile-item-text">جان </span>
          </li>
          <li className="editProfile-item">
            <span className="editProfile-item-title">نام خانوادگی :</span>
            <span className="editProfile-item-text">اسنو</span>
          </li>
          <li className="editProfile-item">
            <span className="editProfile-item-title">سن :</span>
            <span className="editProfile-item-text">26</span>
          </li>
          <li className="editProfile-item">
            <span className="editProfile-item-title">شغل :</span>
            <span className="editProfile-item-text">طراح وب</span>
          </li>
          <li className="editProfile-item">
            <span className="editProfile-item-title">شهر:</span>
            <span className="editProfile-item-text">تبریزایران</span>
          </li>
          <li className="editProfile-item">
            <span className="editProfile-item-title">آدرس :</span>
            <span className="editProfile-item-text">
              چهارراه آبرسان، برج بلور، طبقه 455
            </span>
          </li>
          <li className="editProfile-item">
            <span className="editProfile-item-title">تلفن :</span>
            <span className="editProfile-item-text">(+98) 123 456 789</span>
          </li>
          <li className="editProfile-item">
            <span className="editProfile-item-title">ایمیل :</span>
            <span className="editProfile-item-text">johnsnow@sample.com</span>
          </li>
        </ul>
            <button className="editProfile-btn">ویرایش اطلاعات</button>
       
      </div>
    </section>
  );
}

export default EditProfile;
