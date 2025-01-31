import { PAGE_URL } from "../utils/constant";


const Error=()=>{
    return (
        <div className="errorContainer">
           <img src={PAGE_URL} alt="page not found image" className="erroImg"></img>
           <h1>Oops!!! 404 Page NOT Found </h1>
        </div>
    )
};

export default Error;