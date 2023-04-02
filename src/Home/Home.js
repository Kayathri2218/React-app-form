import React from 'react'
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Home = () => {
    const Navigate = useNavigate();

    const goToProfile = () => {
        Navigate("/Profile");
    }

    const goToCheck = () => {
      Navigate("/CheckParams")
    }

    const [searchParams] = useSearchParams();
    console.log(searchParams.get('id'), searchParams.get('name'));
  return (
    <>
        <h1>Home</h1>
        <h3><Link to={"/Profile"}>Goto Profile</Link></h3>
        <h3><Link to={"/CheckParams"}>GoTo CheckParams</Link></h3>
        <button onClick={() => goToProfile()}>Go To Profile</button>
        <button onClick={() => goToCheck()}>Go To CheckParams</button>
    </>
  )
}

export default Home;