import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
    const params = useParams();
    console.log("Params", params); 

    const Navigate = useNavigate();
    const goToBack = () => {
        Navigate("/Home")
    }
  return (
    <>
    <div>Profile</div>
    <button onClick={() => goToBack()}>Back Home</button>
    </>
  )
}

export default Profile