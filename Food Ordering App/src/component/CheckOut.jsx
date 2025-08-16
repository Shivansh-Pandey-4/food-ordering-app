const CheckOut = ()=>{

    return (
         <div className="border bg-gray-200 h-70 w-70 p-8 rounded-2xl">
             <h1 className="py-1 text-xl font-bold">Order Summary</h1>
             <h2 className="py-1 text-lg">Subtotal : </h2>
             <h2 className="py-1 text-lg">Delivery Fee : </h2>
             <h2 className="py-1 text-lg">Taxes & Charges: </h2>
             <hr />
             <h2 className="py-1 text-lg">Total</h2>
             <button className="border rounded-xl px-3 py-1 cursor-pointer bg-lime-300 font-semibold mt-4 hover:bg-lime-500">Proceed To Checkout</button>
         </div>
    )
}

export default CheckOut;