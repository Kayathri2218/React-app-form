import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CheckParams = () => {

    const Navigate = useNavigate();
    const goToBack = () => {
        Navigate("/Home")
    }

  return (
    <>
        <div>CheckParams</div>
        <h2><Link to={"/Home?id=10&name=Phone"}>Back</Link></h2>
        <h1><Link to={"/profile/11/Realme"}>Go To Profile</Link></h1>
        <button onClick={() => goToBack()}>GoTo Home</button>
    </>
  )
}

export default CheckParams