import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="flex justify-between shadow-md">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 justify-between">
                    <li className="px-4">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="px-4">
                        {/* use Link here instead of <a> as the anchor tag reloads whole page */}
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">
                            Grocery
                        </Link>
                    </li>
                    <li className="px-4">
                        Cart
                    </li>
                    <button className="login" onClick={()=> btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;