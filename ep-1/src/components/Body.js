import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnlineSatus from "../utils/useOnlineStatus";

const Body = () => {
    const restaurants = useRestaurants();
    console.log(restaurants);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

    useEffect(()=>{
        setFilteredRestaurants(restaurants);
    },[restaurants]);

    const onlineStatus = useOnlineSatus();

    if(!onlineStatus) return <h1>Looks like you're not connected to the internet</h1>

    return restaurants?.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="flex justify-between">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        const filteredRestaurant = restaurants.filter((res)=>res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
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
                    <Link className="restaurant-card" to={"/restaurant/"+res.data.id} key={res.data.id}>
                        <RestaurantCard resData={res}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;