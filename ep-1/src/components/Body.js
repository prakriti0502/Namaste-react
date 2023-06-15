import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=> { 
        async function fetchData() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9720888&lng=77.694364&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
        fetchData();
    }, []);

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
                    <Link to={"/restaurant/"+res.data.id} key={res.data.id}>
                        <RestaurantCard resData={res}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;