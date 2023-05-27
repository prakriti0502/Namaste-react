import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>fetchData(), []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9720888&lng=77.694364&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    if(restaurants.length === 0) {
        return <Shimmer/>
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>
                {
                    setRestaurants(restaurants.filter(res=>res.data.avgRating>4));
                    console.log(restaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {restaurants.map(res => (
                    <RestaurantCard key={res.data.id} resData={res}/>
                ))}
            </div>
        </div>
    )
}

export default Body;