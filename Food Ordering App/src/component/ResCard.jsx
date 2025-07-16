import  {FOOD_URL}  from "../utils/constant";

const ResCard = (props)=>{
     const {cuisines,cloudinaryImageId,name,costForTwo,avgRating} = props?.resData?.info;

     return (
         <div className="border-2 w-65 p-2 text-center text-xl mb-10 rounded-xl hover:bg-green-100 cursor-pointer">
             <img className="w-60 h-55 rounded-xl" src={FOOD_URL + cloudinaryImageId} alt="logo-img" />
             <h2 className="p-2 font-bold underline">{name}</h2>
             <p className="p-2">Cuisine : {cuisines.join(",  ")}</p>
             <h3 className="p-2">Price : {costForTwo}</h3>
             <h4 className="p-2">Rating : {avgRating} stars</h4>
         </div>
     )
}

export default ResCard;