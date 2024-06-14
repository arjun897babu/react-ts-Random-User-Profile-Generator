import { User } from "../model/user"

interface UserProps {
  userDetails: User | undefined
}

function UserDetail({ userDetails }: UserProps): JSX.Element {
    console.log('data of the user from child', userDetails)
  return (
    <>
      <div className="card">
        <div className="img-container">
          <img src={userDetails?.avatar} alt="" />
        </div>
        <div className="details">
          <h2>{`${userDetails?.first_name} ${userDetails?.last_name}`}</h2>
          <h3>{userDetails?.employment.title}</h3>
          <h4> 🌍 {userDetails?.address.city}</h4>
        </div>
      </div>

    </>
  )
}

export default UserDetail