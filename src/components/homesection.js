import React from "react";
import "../App.css"
import { Button } from "./button";
import './homesection.css'
import image from "../images/pich.png"

function HomeSection(){
    return(
        <div className="Homesection">
            <div className="slide-section">
                <div className="hero-container">
                    <div className="text_part">
                    <h1> Make CCUS Implementation</h1>
                    <h1>Very <span>Easy With Us</span></h1>
                    <p>Harness the power of AI for seamless CCUS technology implementation and data management. Optimize carbon captureutilization, and storage processes with our cutting-edge services</p>

                    <div className="hero-btns">
                    <Button
                    className="btns"
                    buttonSize='btn--large'
                    buttonStyle='btn--outline'>
                        Try now
                    </Button>
                    </div>
                    </div>
                    <div className="video_part">
                    <img className="video" src={image}/>
                    </div>
                </div>
                <div className="bara">
                    <h2> Our Tool will make it easy for you to know every information about CCUS with using Ai.</h2>
                </div>
            </div>
        </div>
    )
}
export default HomeSection;