import React from "react";
import playStore from "../../../Images/playstore.png";
import appStore from "../../../Images/Appstore.png";
import "./Footer.css";


const Footer = ()=>{
    return (
        <footer id="footer">
            <div className ="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt= "playstore"/>
                <img src={appStore} alt= "Appstore"/>
            </div>
            <div className = "midFooter">
                <h1>FragZone</h1>
                <p>High Quality Perfumes is our first priority</p>
                <p>Copyright 2022 &copy; MeMohammedMatheen.</p>
            </div>
            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="http://instagram.com/itsmatheen" target="_blank" rel="noopener noreferrer" >Instagram</a>
                <a href="http://facebook.com/MohammedMatheenPasha" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.youtube.com/channel/UCRneBfu_vBhtmugUq9War9g" target="_blank" rel="noopener noreferrer">Youtube</a>
            </div>
        </footer>

    );
};

export default Footer;