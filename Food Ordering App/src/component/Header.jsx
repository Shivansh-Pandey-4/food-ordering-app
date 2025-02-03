import { useState } from "react";
import {LOGO_URL} from "../utils/constant";
import useOnlineStatus from "../Hooks/useOnlineStatus";


const Header=()=>{
    const [btn,setBtn]=useState("LogIn");

    return (
        <div className="headingContainer">
           <div className="logoContainer">
               <img src={LOGO_URL} alt="restaurant logo"></img>
           </div>
           <div className="navContainer">
               <nav>
                  <ul>
                    <li>{useOnlineStatus() ? "🟢 Online": "🔴 Offline"}</li>
                     <li>Home</li>
                     <li><a href="/about">About</a></li>
                     <li><a href="/contact">Contact</a></li>
                     <li>Cart</li>
                     <button id="logBtn" onClick={()=>{
                        return(btn=="LogIn")?(setBtn("LogOut")):(setBtn("LogIn"))
                        // console.log("hello world");
                     }}>{btn}</button>
                  </ul>
               </nav>
           </div>
        </div>
    )
};

export default Header;