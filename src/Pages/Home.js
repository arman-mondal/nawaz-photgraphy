import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Home2 from "../Views/Home2"
import Home3 from "../Views/Home3";
import Home4 from "../Views/Home4";
import "../Assets/css/bg.css"
import Footer from "../Components/Footer"

function Home(){
    return(
<div fluid className=" w-full bg-black" >
<Navbar/>
<Header/>
<Home2/>
<Home3/>

</div>

    )
}

export default Home