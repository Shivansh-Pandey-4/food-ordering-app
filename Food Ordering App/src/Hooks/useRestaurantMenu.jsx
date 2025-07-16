import {useEffect, useState} from "react";
import {MENU_URL} from "../utils/constant";

const useRestaurantMenu =(resId)=>{
    // console.log(props);

  const [resInfo,setResInfo]=useState(null);
 
    useEffect(()=>{
        fetchMenu();
     },[])


    async function fetchMenu(){
        const data = await fetch(MENU_URL+resId);
        const response= await data.json();
        setResInfo(response.data);
     }

     return resInfo;
    
};

export default useRestaurantMenu;