import React,{useEffect, useState} from "react"
import { useNavigae,Link, useLocation} from "react-router-dom";

function Home() {
    const location=useLocation()

    return(
        <div className="homepage">

            <h1>Hello {location.state.id} and welcome to the home </h1>

        </div>
    )
}

export default Home