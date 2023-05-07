import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn">Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {resList.map(res => (
                    <RestaurantCard key={res.data.id} resData={res}/>
                ))}
            </div>
        </div>
    )
}

export default Body;