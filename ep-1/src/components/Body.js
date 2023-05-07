import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restaurants, setRestaurants] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>
                {
                    setRestaurants(resList.filter(res=>res.data.avgRating>4));
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