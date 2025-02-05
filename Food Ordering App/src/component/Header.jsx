import { useState , useContext } from "react";
import {LOGO_URL} from "../utils/constant";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";



const Header=()=>{
    const [btn,setBtn]=useState("LogIn");
    const userData= useContext(UserContext);

    return (
        <div className="flex justify-between m-2 shadow-xl rounded-lg bg-pink-200">
           <div className="w-40">
               <img src={LOGO_URL} alt="restaurant logo"></img>
           </div>
           <div>
               <nav >
                  <ul className="flex mr-5 mt-15 text-3xl cursor-pointer ">
                    <li className="px-3 hover:text-amber-600">{useOnlineStatus() ? "🟢 Online": "🔴 Offline"}</li>
                     <li className="px-3  hover:text-amber-600"><Link to="/">Home</Link></li>
                     <li className="px-3  hover:text-amber-600"><Link to="/about">About</Link></li>
                     <li className="px-3  hover:text-amber-600"><Link to="/contact">Contact</Link></li>
                     <li className="px-3  hover:text-amber-600">Cart</li>
                     <button id="logBtn" className="mx-4 bg-blue-600 text-white px-4 py-2 rounded-2xl cursor-pointer" onClick={()=>{
                        return(btn=="LogIn")?(setBtn("LogOut")):(setBtn("LogIn"))
                        // console.log("hello world");
                     }}>{btn}</button>
                     <li className="px-3  hover:text-amber-600">{userData.loggedInUser}</li>
                  </ul>
               </nav>
           </div>
        </div>
    )
};

export default Header;