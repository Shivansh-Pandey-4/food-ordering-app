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
        console.log(response);
        setResInfo(response.data);
        console.log(response.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        console.log(response.data);
     }

     return resInfo;
    
};

export default useRestaurantMenu;