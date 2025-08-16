import { useState } from "react";
import {Link} from "react-router-dom";
import useInternetStatus from "../hooks/useOnlineStatus";
import WebsiteLogo from "../assets/MealHop-logo-transparent.png";
import { useSelector } from "react-redux";



const HeaderComponent = ()=>{
     
      const [btn,setBtn]  = useState("LOGIN");
      const cart = useSelector((state) =>state.cart);


      
     return  <div className="flex justify-around m-2 border-1 bg-green-200 shadow-xl shadow-orange-300 ">
                  <div className="w-40">
                       <img src={WebsiteLogo} alt="logo-img" />
                  </div>
                    <div className="text-xl flex items-center ml-20 ">
                        <nav>
                             <ul className="flex" >
                                <li className="px-5"><Link to="/">Home</Link></li>
                                <li className="px-5"><Link to="/contact">Contact</Link></li>
                                <li className="px-5"><Link to="/about">About</Link></li>
                                <li className="px-5 font-bold hover:cursor-pointer"><Link to={"/cart"}> Cart 
                                   ({
                                        cart.length ?cart.length : 0
                                   })
                                   </Link> 
                                </li>
                               
                                <li className="px-5">Status :{useInternetStatus()?"🟢":"🔴"} </li>
                             </ul>
                        </nav>
                  </div>
            </div>
     
}

export default HeaderComponent;