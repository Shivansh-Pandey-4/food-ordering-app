import {FOOD_URL} from "../utils/constant";

const ResCard=(props)=>{
   //  console.log(props);
    const {res}=props;
    const{name,cuisines,avgRating,cloudinaryImageId}=res.info;
     return (
        <div className="p-3 w-72 border-2 m-5 bg-slate-300 text-center text-xl hover:bg-red-200 rounded-2xl">
           <img className="w-70 bg-center m-auto" src={FOOD_URL+cloudinaryImageId} alt="food Image"></img>
           <h2 className="py-2 text-3xl">{name}</h2>
           <h2 className="py-1">Cuisines: {cuisines.join(", ")}</h2>
           <h3 className="py-1">DeliveryTime: 20min</h3>
           <h3 className="py-1">Rating: {avgRating} stars</h3>
        </div>
     )
};

export default ResCard;