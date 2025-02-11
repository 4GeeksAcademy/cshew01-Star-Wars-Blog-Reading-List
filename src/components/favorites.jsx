import React, { useState, useEffect, useContext } from "react";

const Favorites = ({ favorite }) => {

    const handleRemoveFavorite =() => {
        console.log("remove favorite")
    }
        
        return (
            <li className="d-flex justify-content-between align-items-center">
                <a className="dropdown-item" href="#">{favorite.data}</a>
                <button className="btn fa-regular fa-trash-can" onClick={() => handleRemoveFavorite()}></button>
            </li>
        )
}

export default Favorites;