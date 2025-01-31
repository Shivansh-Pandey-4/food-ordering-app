import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Contact from "./component/Contact";
import Error from "./component/Error";
import About from "./component/About";
import RestaurantMenu from "./component/RestaurantMenu";
import {BrowserRouter,Routes,Route} from "react-router";


const App=()=>{
    return (
        <div>
         <Header></Header>
         <Body></Body>
        </div>
    )
};

// const appRoute=createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//         children: [
//             {
//                 path:"/",
//                 element:<Body></Body>
//             },
//             {
//                 path:"/about",
//                 element:<About></About>
//             },
//             {
//                 path:"/contact",
//                 element:<Contact></Contact>
//             },
//         ]
//     },
   
// ])

const AppRoute=()=>{
    return (
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<App></App>}  /> 
             <Route path="/contact" element={<Contact></Contact>}/>
             <Route path="/about" element={<About></About>}/>
             <Route path="/restaurant/:resId" element={<RestaurantMenu></RestaurantMenu>} />
             <Route path="*" element={<Error></Error>}  />
          </Routes>
        </BrowserRouter>
    )
};



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRoute></AppRoute>);