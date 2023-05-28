import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("rendered");
    useEffect(()=>fetchData(), []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9720888&lng=77.694364&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

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
                    setRestaurants(restaurants.filter(res=>res.data.avgRating>4));
                    console.log(restaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurants.map(res => (
                    <RestaurantCard key={res.data.id} resData={res}/>
                ))}
            </div>
        </div>
    )
}

export default Body;