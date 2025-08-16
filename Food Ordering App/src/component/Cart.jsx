import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../features/cart/cartSlice";
import { FOOD_URL } from "../utils/constant";
import CheckOut from "./CheckOut";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const Cart = ()=>{

    const cart = useSelector((state) => state.cart);
    
    const dispatch = useDispatch();


    if(cart.length == 0){
         return (
             <div className=" text-center h-screen mt-10">
                 <h1 className="text-2xl">Your cart is empty. Add some delicious items to get started!</h1>
                 <Link to={"/"}>
                    <button className="border text-lg rounded-2xl px-4 mt-10 py-2 font-semibold bg-amber-500 hover:bg-lime-300 cursor-pointer">Browse Restaurants</button>
                 </Link>
             </div>
         )
    }
    

      return (

             <div  >
                 <h1 className="text-center text-3xl font-bold py-5" >Your Cart</h1>

            <div className="grid grid-cols-2 mx-30">
                <div>
               {
                   cart.map((item,index)=>{
                      return(
                      <div className="flex border-b justify-center p-8 m-1 bg-gray-100 rounded-sm " key={index}>
                  <div className="text-sm mr-10 w-100 font-semibold">
                    <h1 className="underline text-lg font-bold w-80 break-words ">
                      {item.name}
                    </h1>
                    <h2 className="py-2 ">
                      ₹
                      {item.price / 100  ||
                        item.defaultPrice /100 }.00
                    </h2>
                    <h2>
                        ⭐ {item?.ratings?.aggregatedRating?.rating || "4.0"} ({item?.ratings?.aggregatedRating?.ratingCount || "32 ratings"})
                    </h2>
                    <p className="py-2 ">
                         {item.description.length > 80 
                            ? item.description.slice(0, 80) + "..." 
                            : item.description  }
                    </p>
                  

                  </div>
    
                  <div className="flex flex-col items-center">
                    <img
                      className="h-30 border rounded-2xl"
                      src={FOOD_URL + item.imageId}
                      alt="food-img"
                      />

                  <button onClick={()=>{
                      dispatch(removeItem(item.id));
                      toast.success("Item is removed from your cart successfully");
                      return;
                  }} className="border px-3 py-1 rounded-lg bg-lime-400 font-bold cursor-pointer hover:bg-red-500 ">Remove</button>
                  </div>
                  
                </div>  )
                  })
                }
                </div>
                <div className="flex justify-center">
                   <CheckOut/>
                </div>
             <button onClick={()=>{
                dispatch(clearCart());
                toast.success("Cart cleared successfully.");
                return ;
              }} 
                className="px-3 py-1 border w-full my-5 rounded-xl font-bold text-xl bg-amber-200 cursor-pointer hover:bg-amber-400">Clear Cart</button>
            </div>
                  </div>
        )
}


export default Cart;