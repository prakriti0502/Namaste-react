import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { useEffect } from "react";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const [resInfo, setResInfo] = useState(null);

    const fetchMenu = async () => {
        try {
            const data = await fetch( MENU_API + resId);
            const json = await data.json();
            setResInfo(json.data);
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchMenu();
    },[]);

    const [showIndex, setShowIndex] = useState(null);

    // const resInfo = useRestaurantMenu(resId);

    if(resInfo===null) {
        return <Shimmer/>;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {};

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>{
       return c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });

    return (
        <div className="text-center">
            <h1 className="text-2xl my-6 font-bold">{name}</h1>
            <p className="text-lg font-bold">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* categories accordion */}
            {categories?.map((category, index)=>{
                return <RestaurantCategory 
                key={category?.card?.card.title}
                showItems={index===showIndex ? true : false}
                data={category?.card?.card}
                showIndex={()=>{
                    index===showIndex ? setShowIndex(null) : setShowIndex(index);
                }}
                />
            })}
        </div>
    )
};

export default RestaurantMenu;