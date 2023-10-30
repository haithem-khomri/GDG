import React from "react";
import "../App.css"
import { Button } from "./button";
import './homesection.css'
import video from "../videos/video-2.mp4"

function HomeSection(){
    return(
        <div className="hero-container">
            <video autoPlay loop muted>
                <source src={video}></source>
            </video>
            <h1> Adventure is here for us</h1>
            <p>lets explore it togother</p>
            <div className="hero-btns">
            <Button
            className="btns"
            buttonSize='btn--large'
            buttonStyle='btn--outline'>
                Test here
            </Button>
            </div>
        </div>
    )
}
export default HomeSection;