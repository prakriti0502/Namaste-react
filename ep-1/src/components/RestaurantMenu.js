import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo===null) {
        return <Shimmer/>;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {};

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="bg-slate-200 flex-col m-auto mt-2 text-center p-4 w-[50%]">
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-lg font-medium">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <ul className="p-4 m-4">
                {itemCards.map(item=>(
                    <li key={item.card.info.id}>
                        <card className="bg-slate-100 p-4 m-4 flex items-center justify-between w-[35rem] h-[6rem]">
                            <span>{item.card.info.name} </span>
                            <span>
                            {" Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}
                            </span>
                        </card>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default RestaurantMenu;