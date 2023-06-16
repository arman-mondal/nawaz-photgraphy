import React, { useRef, useEffect } from "react";
import { Player,Controls } from "@lottiefiles/react-lottie-player";
import { LottieInteractivity } from "@lottiefiles/lottie-interactivity";
import "../Assets/css/button.css"
import "../Assets/css/bg.css"



function Header(){
function book(){
  window.location.href="#book"
}


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
    <div id="home" className="hero min-h-screen bg-base-200 bggg">
    <div  className="hero-content text-center ">
       
      <div className="max-w-md">
        <div>
            <Player
           
            ref={lottieRef}
            id="thirdLottie"
            autoplay
            src="https://assets2.lottiefiles.com/packages/lf20_fPPjzl7JC2.json"
            >
                
            </Player>
        </div>
        <h1 className="text-5xl font-bold drop-shadow-xl text-white w-full aniii">Nawaz Photography</h1>
        <p className="py-6 drop-shadow-lg text-white aniii">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button onClick={book} class="beautiful-button aniii">
  Book Now
</button>
      </div>
    </div>
  </div>
  )
}

export default Header