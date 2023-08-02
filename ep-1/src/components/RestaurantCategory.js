import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, showIndex}) => {


    const handleClick = () => {
        showIndex();
    }
    return (
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                {/* Accordion header */}
                <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {/* Accordion body */}
                {
                    showItems && <ItemList items={data.itemCards}/>
                }
                
            </div>
    )
}

export default RestaurantCategory;