import { useState, useEffect } from "react";
import { RES_API } from "./constants";

const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=> { 
        async function fetchData() {
            try {
                const data = await fetch(RES_API);
                const json = await data.json();
                setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            } catch(error) {
                console.log(error);
            }
    }
        fetchData();
    }, []);

    return restaurants;
}

export default useRestaurants;