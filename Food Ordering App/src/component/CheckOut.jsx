import { useSelector } from "react-redux";


const CheckOut = ()=>{

   const cart = useSelector((state) => state.cart);
   console.log(cart);
   

  const subtotal = cart.reduce((acc, item) => acc + (item.price / 100 || item.defaultPrice /100), 0);

  const deliveryFee = 43;
  const taxes = 31.60;

  const total = subtotal + deliveryFee + taxes;

  return (
  <div className="border bg-gray-200 h-80 w-80 p-8 rounded-2xl">
      <h1 className="py-2 text-xl font-bold">Order Summary</h1>

      <div className="flex justify-between py-2 text-lg">
        <span>Subtotal :</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between py-2 text-lg">
        <span>Delivery Fee :</span>
        <span>₹{deliveryFee}</span>
      </div>

      <div className="flex justify-between py-2 text-lg">
        <span>Taxes & Charges :</span>
        <span>₹{taxes}0</span>
      </div>

      <hr />

      <div className="flex justify-between py-2 text-lg font-bold">
        <span>Total :</span>
        <span>₹{total.toFixed(2)}</span>
      </div>

      <button className="border rounded-xl px-3 py-1 cursor-pointer bg-lime-300 font-semibold mt-4 hover:bg-lime-500 w-full">
        Proceed To Checkout
      </button>
    </div>
  );

}

export default CheckOut;