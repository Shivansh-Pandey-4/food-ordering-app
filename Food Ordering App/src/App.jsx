import React from "react";
import ReactDOM from "react-dom/client";
import { lazy ,Suspense } from "react";

import Header from "./component/Header";
import Body from "./component/Body";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu"
import Footer from "./component/Footer";

const Contact = lazy(()=>import("./component/Contact"));
const About = lazy(()=>import("./component/About"));
const Cart = lazy(()=>import("./component/Cart"));

import {createBrowserRouter,RouterProvider, Outlet} from "react-router";
import {Provider} from "react-redux";
import { store } from "./app/store";
import UserContext from "./utils/UserContext";
import { ToastContainer } from "react-toastify";


//lazy loading and code-splitting and on demand loading and chunking all are same.
// const Grocery = lazy(()=> import("./component/Grocery"));
// you need to import the Grocery component through calling lazy function which take a callback function in which it return a import method which take the location of the component you want to import .
// react is very fast and when react tries to render the Grocery component it was not there so it suspended it.
// react provide a component Suspense which need to wrap your component inside it.
// <Suspense fallback={some jsx}> <Grocery/> </Suspense>....we need to pass fallback so till grocery component is not present till that time it will show that jsx. because it needs to fill the space of grocery till the code of grocery comes.


const App=()=>{
    return (
        <div>
         <Provider store={store} >
            <Header></Header>
            <Outlet/>
            <Footer/>
         </Provider>
         <ToastContainer />
        </div>
    )
};

const appRoute=createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement : <Error/>,
        children: [
            {
                path:"/",
                element:<Body></Body>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1 className="flex text-2xl justify-center items-center">Loading...</h1>}>
                    <About/>
                </Suspense>
            },
            {
                path:"/contact",
                element:<Suspense fallback={<h1 className="text-2xl flex justify-center items-center">Loading...</h1>}>
                     <Contact/>
                </Suspense>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu></RestaurantMenu>
            },
            {
                path : "/cart",
                element : <Cart/>
            }
        ]
    },
   
])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);