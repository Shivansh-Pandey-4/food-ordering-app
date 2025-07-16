import { useState } from "react";
import ItemList from "./ItemList";
// need to build accordian inside it where there is header and body.

const RestaurantCategory=(props)=>{
    const [showItem,setShowItem]=useState(false);

    const showMore=()=>{
        setShowItem(!showItem);
    }

    const {itemCards,title}=props.data;
   

    return (
        <div className=" mx-auto bg-slate-200 my-6 rounded-2xl shadow-lg p-2 py-3 w-8/12 font-bold text-xl">

         <div className="flex justify-between cursor-pointer " onClick={showMore}>
            <span className="pl-3">{title } ({itemCards.length}) </span>
            <span className="pr-3">🔽</span>
         </div>

             {
               (showItem) && <ItemList name="category showing" data={itemCards}/> 
             }

        </div>
    )
}

export default RestaurantCategory;