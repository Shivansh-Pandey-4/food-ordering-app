import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import {Link} from "react-router-dom";
import useInternetStatus from "../hooks/useOnlineStatus";
import WebsiteLogo from "../assets/MealHop-logo.png";



const HeaderComponent = ()=>{
     
      const [btn,setBtn]  = useState("LOGIN");


      
     return  <div className="flex justify-around m-2 border-1 bg-orange-300 shadow-xl shadow-orange-300 ">
                  <div className="w-40">
                       <img src={WebsiteLogo} alt="logo-img" />
                  </div>
                    <div className="text-xl flex items-center mr-10 ">
                        <nav>
                             <ul className="flex" >
                                <li className="px-5">Status :{useInternetStatus()?"🟢":"🔴"} </li>
                                <li className="px-5"><Link to="/">Home</Link></li>
                                <li className="px-5"><Link to="/contact">Contact</Link></li>
                                <li className="px-5"><Link to="/about">About</Link></li>
                                <li className="px-5 ">Cart</li>
                                <button className=" rounded-lg cursor-pointer border-2 border-black px-1 bg-sky-500 text-white w-30" onClick={()=>{
                                     if(btn == "LOGIN"){
                                         setBtn("LOGOUT")
                                     }else{
                                         setBtn("LOGIN")
                                     }
                                }}>{btn}</button>
                             </ul>
                        </nav>
                  </div>
            </div>
     
}

export default HeaderComponent;