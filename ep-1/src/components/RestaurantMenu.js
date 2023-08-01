import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo===null) {
        return <Shimmer/>;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {};

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>{
       return c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
    console.log(categories);

    return (
        <div className="text-center">
            <h1 className="text-2xl my-6 font-bold">{name}</h1>
            <p className="text-lg font-bold">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* categories accordion */}
            {categories.map((category)=>{
                return <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>
            })}
        </div>
    )
};

export default RestaurantMenu;