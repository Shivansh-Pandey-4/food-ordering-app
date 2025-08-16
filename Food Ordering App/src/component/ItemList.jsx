import { FOOD_URL } from "../utils/constant";
import { addItem } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-toastify";


const ItemList=(props)=>{

   const {data}=props;   
      
   const dispatch = useDispatch();
    
    return (
        <div>
           {
              data.map((item)=>{
                  return(
                  <div className="rounded-2xl my-5 border hover:bg-blue-100 p-4 flex justify-between items-center" key={item.card.info.id}>
              <div className="text-lg mr-10 flex-1">
                <h1 className="py-2 underline font-bold">
                  {item.card.info.name}
                </h1>
                <p className="py-2 font-light text-[15px] font-mono">
                  Description: {item.card.info.description}
                </p>
                <h2 className="py-2 font-semibold">
                  Price: ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </h2>
              </div>

              <div className="relative w-48 aspect-square">
                <img
                  className="w-50 h-50 object-cover border rounded-2xl"
                  src={FOOD_URL + item.card.info.imageId}
                  alt="food-img"
                />
                <button onClick={()=>{
                    dispatch(addItem(item.card.info));
                    toast.success("Item successfully added to the cart")
                    return; 
                }}
                  className="cursor-pointer absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 bg-white border px-3 py-1 rounded-lg shadow hover:bg-green-300"
                >
                    ADD
                </button>
              </div>
            </div>
                     )
              })
           }
        </div>
    )
}

export default ItemList; 