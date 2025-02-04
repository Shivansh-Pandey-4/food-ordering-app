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

     const{name,cuisines,costForTwoMessage,cloudinaryImageId}=resInfo.cards[2].card.card.info;

     const{itemCards}=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
     

     const itemCategory = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((item)=>{
          if(item.card.card?.["@type"].includes("ItemCategory"))
                              return item;
     })

    //  console.log(itemCategory);

    return (
     <div className="text-center m-auto">
         <h1 className="text-4xl py-10">{name}</h1>
         <img src={FOOD_URL+cloudinaryImageId} alt="Restaurant Img" className="w-100 border-2 m-auto"></img>
         <h2 className="text-2xl">Menu: {cuisines.join(", ")} --- {costForTwoMessage}</h2>
            {
                itemCategory.map((item, index)=>{
                     return <RestaurantCategory key={index} data={item.card.card} />
                })
            }
     </div>
    );
};

export default RestaurantMenu;
