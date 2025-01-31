import ResCard from "./ResCard";
import {useEffect, useState} from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";


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
  
    return(resData.length==0) ? (<ShimmerUI></ShimmerUI>) :(
       <div className="bodyContainer">
         <div className="searchContainer">

            <input type="text" placeholder="Search Restaurant" value={searchBtn} onChange={(e)=>{
                setSearchBtn(e.target.value);
            }}></input>

            <button onClick={()=>{
              const filteredRes=resData.filter((obj)=>{
                  if(obj.info.name.toLowerCase().includes(searchBtn.toLowerCase()))
                     return obj;                
               })
               setCopyResData(filteredRes);
            }}>Search</button>
         </div>

         <div className="topRatedRestaurant">
            <button id="filter" onClick={()=>{
              let newData;
               newData=resData.filter((obj)=>{
                    if(obj.info.avgRating>=4.2)
                       return obj;
              })
                setCopyResData(newData);
            }}>Top Rated Restaurant</button>
         </div>

         <div className="restaurantContainer">
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