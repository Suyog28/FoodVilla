import { useState } from "react"
import { Link } from "react-router-dom"


const Title = () => {
    return (
        <img src="https://icon-library.com/images/restaurant-icon-png/restaurant-icon-png-21.jpg" className="logo" />
    )
}

const HeaderComponants = () => {
    const [logIn, setlogIn] = useState("false");
    return (
        <div className="navbar">
            <Title />
            <ul className="logo-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <li> <div className="btnlogin">
                    {
                        logIn ? (<button className="loginBtn" onClick={() => setlogIn(false)} >Logout</button>) : (
                            <button className="loginBtn" onClick={() => setlogIn(true)} >LogIn</button>
                        )

                    }

                </div></li>
            </ul>

        </div>
    )
}

export default HeaderComponants;