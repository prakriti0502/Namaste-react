import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const {resId} = useParams();
    console.log(resId);

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        try {
            const data = await fetch( MENU_API + resId);
            const json = await data.json();
            console.log("data from useeffect");
            setResInfo(json.data);
        } catch(error) {
            console.log(error);
        }
    };

    if(resInfo===null) {
        return <Shimmer/>;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {};

    console.log("items assigning");
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log("items are ", resInfo?.cards[0]?.card?.card?.info);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item=>(
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {" Rs."} 
                        {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default RestaurantMenu;