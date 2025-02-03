import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUI";
import { FOOD_URL } from "../utils/constant";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";


const RestaurantMenu=()=>{
    
    const {resId}=useParams();

    const resInfo= useRestaurantMenu(resId);
     

     if(resInfo===null)
         return <ShimmerUI></ShimmerUI>;

     const{name,cuisines,costForTwoMessage,cloudinaryImageId}=resInfo.cards[2].card.card.info;

     const{itemCards}=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    return (
     <div className="text-center m-auto">
         <h1 className="text-4xl py-10">{name}</h1>
         <img src={FOOD_URL+cloudinaryImageId} alt="Restaurant Img" className="w-xl border-2 m-auto"></img>
         <h2 className="text-2xl">Menu: {cuisines.join(", ")} --- {costForTwoMessage}</h2>
         <ul>
             <h2 className="text-2xl py-5">Items Recommend For You:</h2>
            {
                  itemCards.map((item)=>{
                     return (
                        <div key={item.card.info.id} className="my-10">
                            <li className="text-2xl"><b>{item.card.info.name} ₹{item.card.info.defaultPrice/100 || item.card.info.price/100} </b></li>
                            <img className="w-80 m-auto" src={FOOD_URL+item.card.info.imageId}></img>
                        </div>
                     )
                  })
            }
         </ul>
     </div>
    );
};

export default RestaurantMenu;
