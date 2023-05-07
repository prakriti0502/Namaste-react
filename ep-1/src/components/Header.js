import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li className="cart-logo"><img className="cart" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxczGFQQ8WprnBfU08MtAqACtO85YPFBC7kQ&usqp=CAU"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;