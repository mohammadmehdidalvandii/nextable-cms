import AddActivity from "../../components/Template/profile/AddActivity/AddActivity"
import ProfileStatus from "../../components/Template/profile/ProfileStatus/ProfileStatus"
import EditProfile from "../../components/Template/profile/EditProfile/EditProfile"

function Profile() {
  return (
    <section className="profile">
        <div className="row ">
            <div className="col-12">
                    <ProfileStatus/>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-8 col-md-12">
               <AddActivity/>
            </div>
            <div className="col-lg-4 col-md-12">
                <EditProfile/>
            </div>
        </div>
        
    </section>
  )
}

export default Profile