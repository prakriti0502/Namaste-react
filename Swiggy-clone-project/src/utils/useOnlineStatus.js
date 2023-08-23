import { useEffect, useState } from "react";

const useOnlineSatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);
    //we only need the event listener to be added once, so we use empty dependancy array => []
    useEffect(()=>{
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
    },[]);

    return onlineStatus;
}

export default useOnlineSatus;