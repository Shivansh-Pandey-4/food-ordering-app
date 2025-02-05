import { FOOD_URL } from "../utils/constant";

// this is the body of the accordian list.
const ItemList=(props)=>{

   const {data}=props;
   console.log(data);
    
    return (
        <div>
           {
              data.map((item)=>{
                  return(

                     <div key={item.card.info.id} className="m-3 p-3 border-2 text-left">
                     <div className="" >
                         <img className="w-30" src={FOOD_URL + item.card.info.imageId}></img>
                         <h1 className="text-lg">{item.card.info.name}</h1>
                         <h2 className="py-3">Rs. {item.card.info.price/100 || item.card.info. defaultPrice/100}</h2>

                     </div>
                         <p className="text-xs">{item.card.info.description}</p> 

                     </div>
                     )
              })
           }
        </div>
    )
}

export default ItemList; 