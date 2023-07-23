import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines,avgRating, sla} = resData?.data;
    return (
        <div className="m-4 p-4 w-[235px] bg-gray-50 hover:bg-gray-200 rounded-lg">
            <img className="rounded-lg" alt="restaurant-image" 
            src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="whitespace-break-spaces">{cuisines.join(", ")}</h4>
            <h4>{avgRating} &#9733;</h4>
            <h4>{sla.deliveryTime} MINS</h4>
        </div>
    )
}

export default RestaurantCard;