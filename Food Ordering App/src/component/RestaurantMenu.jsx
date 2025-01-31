import { useEffect,useState } from "react";
import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUI";
import { FOOD_URL } from "../utils/constant";
import { MENU_URL } from "../utils/constant";


const RestaurantMenu=()=>{
    const [resInfo,setResInfo]=useState(null);
    
    const {resId}=useParams();
     
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

     if(resInfo===null)
         return <ShimmerUI></ShimmerUI>;

     const{name,cuisines,costForTwoMessage,cloudinaryImageId}=resInfo.cards[2].card.card.info;

     const{itemCards}=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    return (
     <div className="menuContainer">
         <h1>{name}</h1>
         <img src={FOOD_URL+cloudinaryImageId} alt="Restaurant Img" className="resImage"></img>
         <h2>Menu: {cuisines.join(", ")} --- {costForTwoMessage}</h2>
         <ul>
             <h2>Recommend For You:</h2>
            {
                  itemCards.map((item)=>{
                     return (
                        <div key={item.card.info.id} className="resFood">
                            <li><b>{item.card.info.name} ₹{item.card.info.defaultPrice/100 || item.card.info.price/100} </b></li>
                            <img className="foodImage" src={FOOD_URL+item.card.info.imageId}></img>
                        </div>
                     )
                  })
            }
         </ul>
     </div>
    );
};

export default RestaurantMenu;
