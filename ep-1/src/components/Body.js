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

    return restaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className="search-btn" onClick={()=>{
                        const filteredRestaurant = restaurants.filter((res)=>res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>
                {
                    setFilteredRestaurants(restaurants.filter(res=>res.data.avgRating>4));
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
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