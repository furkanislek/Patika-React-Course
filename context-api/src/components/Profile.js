import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const {user} = useContext(UserContext);


  return <div>
    {JSON.stringify(user)}
  </div>;
}

export default Profile;
