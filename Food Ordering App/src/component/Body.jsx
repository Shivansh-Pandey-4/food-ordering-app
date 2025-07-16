import ResCard from "./ResCard";
import {useEffect, useState} from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { SWIGGY_URL } from "../utils/constant";


const Body=()=>{
   const [resData,setResData]=useState([]);
   const [copyResData,setCopyResData]=useState([]);
   const [searchBtn,setSearchBtn]=useState("");

   useEffect(()=>{
      fetchData();
   },[]);

   const fetchData=async()=>{
      let data= await fetch(SWIGGY_URL);

      let response= await data.json();

      setResData(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setCopyResData(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   }

   const onlineStatus=useOnlineStatus();

   if(onlineStatus === false)
       return <> <h1>You are offline ! Plz check your internet connection. </h1></>
  
    return(resData.length==0) ? (<ShimmerUI></ShimmerUI>) :(
       <div>
         <div className="m-5 text-center inline-block pt-5 ">

            <input className=" border-2 w-125 rounded-lg p-2 pl-4 text-lg h-10 mb-5 ml-7" type="text" placeholder="Search Restaurant" value={searchBtn} onChange={(event)=>{setSearchBtn(event.target.value);}}  onKeyDown={(event)=>{
                        if(event.key === "Enter"){
                           setCopyResData(copyResData.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchBtn.toLowerCase())));
                           setSearchBtn("");
                        }
                     }}></input>

            <button className=" cursor-pointer border-2 rounded-lg text-lg h-10 ml-3 px-3 bg-amber-300 text border-black hover:bg-orange-600 hover:text-black " onClick={()=>{
              const filteredRes=resData.filter((obj)=>{
                  if(obj.info.name.toLowerCase().includes(searchBtn.toLowerCase()))
                     return obj;                
               })
               setCopyResData(filteredRes);
            }}>Search</button>
         </div>

         <div className="inline-block bg-amber-400 p-2 rounded-2xl text-lg font-semibold ml-83 hover:bg-orange-600 hover:text-black">
            <button className="cursor-pointer" id="filter" onClick={()=>{
              let newData;
               newData=resData.filter((obj)=>{
                    if(obj.info.avgRating>=4.4)
                       return obj;
              })
                setCopyResData(newData);
            }}>Top Rated Restaurant</button>
         </div>

         <div className="inline-block bg-amber-400 p-2 rounded-2xl text-lg font-semibold ml-7 hover:bg-orange-600 hover:text-black ">
            <button className="cursor-pointer" id="filter" onClick={()=>{
              setCopyResData(resData);
            }}>Reset Filter</button>
         </div>

         <div className=" flex justify-center px-10 gap-x-20 flex-wrap">
             {
               copyResData.map((obj)=>{
                 return <Link key={obj.info.id} to={"/restaurant/"+obj.info.id}> <ResCard resData={obj} />     </Link>
               })
             }
         </div>
       </div>
    )
};  


export default Body;