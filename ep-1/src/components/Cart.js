import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

// import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        console.log("called")
      dispatch(clearCart());
    };

    if(cartItems.length===0) {
        return <div className="text-center p-4 m-4">
        <h1 className="text-2xl font-bold">Cart is empty!</h1>
        </div> 
    }

    return  <div className="text-center p-4 m-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        
        {cartItems.length>0
        && 
        <button className="p-2 m-2 rounded-lg bg-black text-white"
         onClick={()=>handleClearCart()}
         >Clear Cart</button>
        }
        <div className="w-6/12 m-auto">
            <ItemList items={cartItems}/>
        </div>
    </div>
}

export default Cart;