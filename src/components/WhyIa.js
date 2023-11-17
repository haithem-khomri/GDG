import React from "react";
import "../App.css"
import './Whyia.css'
import image from "../images/robot.png"

function Why(){
    return(
        <div className="hero-container">
            <div className=" image-container" >
               <img className="imagee" src={image}/>
            </div>
            <div className="text_part">
                <h1> <span>Why We use Ai?</span></h1>
                <p>In our solution, the integration of AI plays a pivotal role in enhancing the efficiencyof CCUS implementation. By automating complex data analysis tasks, we canexpedite decision-making processes. AI's predictive analytics capabilities allowfor the identification of potential challenges, enabling proactive measures andminimizing setbacks. Real-time monitoring ensures adaptability to dynamicproject data, optimizing resource allocation for more effective CCUS projects.</p>

            </div>
        </div>
    )
}
export default Why;