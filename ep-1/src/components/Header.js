import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        {/* use Link here instead of <a> as the anchor tag reloads whole page */}
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li className="cart-logo">
                        <img className="cart" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxczGFQQ8WprnBfU08MtAqACtO85YPFBC7kQ&usqp=CAU"/>
                    </li>
                    <button className="login" onClick={()=> btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;