import React,{useRef,useEffect} from "react";
import "../Assets/css/bg.css"
import { Player } from "@lottiefiles/react-lottie-player";
import a from "../Assets/img/1.jpeg"
import b from "../Assets/img/2.jpeg"
import c from "../Assets/img/3.jpeg"
import d from "../Assets/img/4.jpeg"
import e from "../Assets/img/5.jpeg"
import f from "../Assets/img/6.jpeg"
import g from "../Assets/img/7.jpeg"
import h from "../Assets/img/8.jpeg"
import i from "../Assets/img/9.jpeg"



function Home2(){


    
    const lottieRef = useRef(null);


    useEffect(() => {
        const timeout = setTimeout(() => {
          if (lottieRef.current) {
            lottieRef.current.pause();
          }
        }, 2500); // Adjust the delay as needed
        return () => {
            clearTimeout(timeout);
          };
        }, []);
    
    return(
        <div className="h-max  bgggg w-full">
<div id="gallery" class=" flex pt-10  justify-center">
 <h1 className="text-5xl font-bold text-white text-center">Gallery</h1>
</div>

<div className="p-5 h-max " >
<div className="carousel w-full aniii">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={a} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={b} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={c} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={d} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide5" className="carousel-item relative w-full">
    <img src={e} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>



  <div id="slide6" className="carousel-item relative w-full">
    <img src={f} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>


  <div id="slide7" className="carousel-item relative w-full">
    <img src={g} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>




  <div id="slide8" className="carousel-item relative w-full">
    <img src={h} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide7" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>



  <div id="slide9" className="carousel-item relative w-full">
    <img src={i} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide7" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>



</div>









</div>

<div  >

</div>
        </div>
    )
}
export default Home2