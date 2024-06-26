import React from "react";

const Button = ({onClick, buttonText}) => {
    return (
        <div>
            <button className="logo-white" onClick={onClick}>
            <img src="public/images/logo-white.png" alt="Button" />
            </button>
        </div>
    )
}

export default Button;