import React,{useContext} from "react";
import userContext from "../context/UserContext";


function Profile(){
  const {user} = useContext(userContext)
  if (!user) return(<div>please login</div>)
  return(
    <div>
        <h2>welcome {user.username} </h2>
    </div>
  )
}
export default Profile;
