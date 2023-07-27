import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineSatus from "../utils/useOnlineStatus";
import { RES_API } from "../utils/constants";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=> { 
        async function fetchData() {
            try {
                const data = await fetch(RES_API);
                const json = await data.json();
                console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            } catch(error) {
                console.log(error);
            }
    }
        fetchData();
    }, []);

    const onlineStatus = useOnlineSatus();

    if(!onlineStatus) return <h1>Looks like you're not connected to the internet</h1>

    if(!restaurants) return null;

    return restaurants?.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="flex justify-between">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        const filteredRestaurant = restaurants.filter((res)=>res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-1 bg-gray-100 rounded-lg" onClick={()=>{
                        setFilteredRestaurants(restaurants.filter(res=>res.data.avgRating>4));
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map(res => (
                    <Link className="restaurant-card" to={"/restaurant/"+res.info.id} key={res.info.id}>
                        <RestaurantCard resData={res}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;