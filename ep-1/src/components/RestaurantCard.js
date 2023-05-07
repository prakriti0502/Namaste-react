import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines,avgRating, sla} = resData?.data;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="restaurant-image" 
            src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4 className="cuisines">{cuisines.join(",")}</h4>
            <h4>{avgRating} &#9733;</h4>
            <h4>{sla.deliveryTime} MINS</h4>
        </div>
    )
}

export default RestaurantCard;