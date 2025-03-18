import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Favorites = ({ favorite }) => {

    const { dispatch } = useGlobalReducer();

    const handleRemoveFavorite =() => {
        console.log("remove favorite")
        dispatch({
            type: "remove_favorite",
            name: favorite.name,
        })
    }
        
        return (
            <li className="d-flex justify-content-between align-items-center">
                {/* <a className="dropdown-item" href="#">{favorite.name}</a> */}
                <Link href="#" to={`/details/${favorite.id}`}>{favorite.name}</Link>
                <button className="btn fa-regular fa-trash-can" onClick={() => handleRemoveFavorite()}></button>
            </li>
        )
}

export default Favorites;