import React from "react";


const Navbar = () => {
    return (
        <>
        <nav className="navbar"> 
            <div className="navbar-buttons">
            <button className="logo-white" onClick={onClick}>
            <img src="public/images/logo-white.png" alt="Button" />
            </button>
            </div>
        </nav>
        </>
    )
}

export default Navbar;