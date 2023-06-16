import React,{useRef,useEffect} from "react";
import "../Assets/css/bg.css"
import { Player } from "@lottiefiles/react-lottie-player";

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
        <div className="h-screen bgggg w-full">
<div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
  <Player
           
           ref={lottieRef}
           id="thirdLottie"
           autoplay
           src="https://assets2.lottiefiles.com/packages/lf20_fPPjzl7JC2.json"
           >
               
           </Player>
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    )
}
export default Home2