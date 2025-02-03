import ResCard from "./ResCard";
import {useEffect, useState} from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";
import useOnlineStatus from "../Hooks/useOnlineStatus";


const Body=()=>{
   const [resData,setResData]=useState([]);
   const [copyResData,setCopyResData]=useState([]);
   const [searchBtn,setSearchBtn]=useState("");

   useEffect(()=>{
      fetchData();
   },[]);

   const fetchData=async()=>{
      let data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9411723&lng=77.6213047&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      let response= await data.json();

      console.log(response);
      setResData(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setCopyResData(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   }

   const onlineStatus=useOnlineStatus();

   if(onlineStatus === false)
       return <> <h1>You are offline ! Plz check your internet connection. </h1></>
  
    return(resData.length==0) ? (<ShimmerUI></ShimmerUI>) :(
       <div className="">

         <div className="m-5 text-center inline-block ">

            <input className="bg-amber-700 rounded-2xl mr-4 p-3 w-100 text-black font-extrabold" type="text" placeholder="Search Restaurant" value={searchBtn} onChange={(e)=>{
                setSearchBtn(e.target.value);
            }}></input>

            <button className="bg-orange-300 p-2 rounded-lg cursor-pointer px-3 font-bold" onClick={()=>{
              const filteredRes=resData.filter((obj)=>{
                  if(obj.info.name.toLowerCase().includes(searchBtn.toLowerCase()))
                     return obj;                
               })
               setCopyResData(filteredRes);
            }}>Search</button>
         </div>

         <div className="inline-block bg-amber-400 p-2 rounded-2xl text-lg font-semibold ">
            <button className="cursor-pointer" id="filter" onClick={()=>{
              let newData;
               newData=resData.filter((obj)=>{
                    if(obj.info.avgRating>=4.2)
                       return obj;
              })
                setCopyResData(newData);
            }}>Top Rated Restaurant</button>
         </div>

         <div className="flex-wrap flex">
             {
               copyResData.map((obj)=>{
                 return <Link key={obj.info.id} to={"/restaurant/"+obj.info.id}> <ResCard res={obj} /></Link>
               })
             }
         </div>
       </div>
    )
};  


export default Body;