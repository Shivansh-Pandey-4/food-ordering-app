import { useState } from "react";

const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(true);

    window.addEventListener("online",function(){
         return setOnlineStatus(true);
    })

    window.addEventListener("offline",function (){
         return setOnlineStatus(false);
    })

    return onlineStatus;
}

export default useOnlineStatus;