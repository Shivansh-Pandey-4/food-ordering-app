import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Contact from "./component/Contact";
import Error from "./component/Error";
import About from "./component/About";
import RestaurantMenu from "./component/RestaurantMenu"
import {createBrowserRouter,RouterProvider, Outlet} from "react-router";
import UserContext from "./utils/UserContext";



//lazy loading and code-splitting and on demand loading and chunking all are same.
// const Grocery = lazy(()=> import("./component/Grocery"));
// you need to import the Grocery component through calling lazy function which take a callback function in which it return a import method which take the location of the component you want to import .
// react is very fast and when react tries to render the Grocery component it was not there so it suspended it.
// react provide a component Suspense which need to wrap your component inside it.
// <Suspense fallback={some jsx}> <Grocery/> </Suspense>....we need to pass fallback so till grocery component is not present till that time it will show that jsx. because it needs to fill the space of grocery till the code of grocery comes.

const App=()=>{
    return (
        <div>
        <UserContext.Provider value={{loggedInUser:"Shivansh"}}>
          <Header></Header>
          <Outlet/>
        </UserContext.Provider>
        </div>
    )
};

const appRoute=createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:"/",
                element:<Body></Body>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu></RestaurantMenu>
            },
            {
                path: "*",
                element: <Error></Error>
            }
        ]
    },
   
])

// const AppRoute=()=>{
//     return (
//         <BrowserRouter>
//           <Routes>
//              <Route path="/" element={<App></App>}  /> 
//              <Route path="/contact" element={<Contact></Contact>}/>
//              <Route path="/about" element={<About></About>}/>
//              <Route path="/restaurant/:resId" element={<RestaurantMenu></RestaurantMenu>} />
//              <Route path="*" element={<Error></Error>}  />
//           </Routes>
//         </BrowserRouter>
//     )
// };



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);