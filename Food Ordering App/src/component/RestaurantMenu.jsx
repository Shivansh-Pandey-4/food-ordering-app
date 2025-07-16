import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUI";
import { FOOD_URL } from "../utils/constant";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{
    
    const {resId}=useParams();

    const resInfo= useRestaurantMenu(resId);
     

     if(resInfo===null)
         return <ShimmerUI></ShimmerUI>;

     const{name,cuisines,costForTwoMessage,cloudinaryImageId,avgRatingString,totalRatingsString,sla}=resInfo.cards[2].card.card.info;

     const{itemCards}=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
     

     const itemCategory = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((item)=>{
          if(item.card.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                              return item;
     })


    return (
     <div className="pt-10">
        <div className="flex justify-center items-center">  
         <img src={FOOD_URL+cloudinaryImageId} alt="Restaurant Img" className="w-70 h-70 rounded-2xl border-2 "></img>
        <div className="ml-20">
         <h1 className="text-4xl font-bold">{name}</h1>
         <h2 className="text-xl pt-3 font-serif">Menu: {cuisines.join(", ")} - {costForTwoMessage}</h2>
         <h2 className="text-xl pt-3 font-mono"> AVG: {avgRatingString} ⭐  </h2>
         <h2 className="text-xl pt-3 font-mono"> {totalRatingsString}  </h2>
         <h2 className="text-xl pt-3 font-mono"> Delivery Time: {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins  </h2>
        </div>
        </div>
          <div className="py-10">

            {
                itemCategory.map((item, index)=>{
                    return <RestaurantCategory key={index} data={item.card.card} />
                })
            }
         </div>
     </div>
    );
};

export default RestaurantMenu;
