import {FOOD_URL} from "../utils/constant";

const ResCard=(props)=>{
   //  console.log(props);
    const {res}=props;
    const{name,cuisines,avgRating,cloudinaryImageId}=res.info;
     return (
        <div className="resCard">
           <img src={FOOD_URL+cloudinaryImageId} alt="food Image"></img>
           <h2>{name}</h2>
           <h2>Cuisines: {cuisines.join(", ")}</h2>
           <h3>DeliveryTime: 20min</h3>
           <h3>Rating: {avgRating} stars</h3>
        </div>
     )
};

export default ResCard;