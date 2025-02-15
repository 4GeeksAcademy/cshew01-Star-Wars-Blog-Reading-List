import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
// import AddFavorites from "./favorites";

const StarshipCard = ({ starship }) => {

    const { dispatch } = useGlobalReducer();

    return (
        <>
            <div className="p-2 m-2 text-bg-dark" >
                <div >
                    <div className="card">
                        <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/05/best-star-wars-ships.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5" className="card-img-top" style={{ width: "300px" }} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{starship.name}</h5>
                            <p className="card-text">Model: {starship.model}</p>

                            {/* <ul className="list-group list-group-flush">
                                <li className="list-group-item text-bg-dark">Population: {starship.population}</li>
                                <li className="list-group-item text-bg-dark">Diameter: {starship.diameter} km</li>
                                <li className="list-group-item text-bg-dark">Rotation: {starship.rotation_period} hrs with an orbit of {starship.orbital_period} days </li>
                            </ul> */}

                            <Link href="#" className="card-link" to={`/details/${starship.uid}`}>
                                Learn More
                            </Link>
                            <button
                                type="button"
                                className={`btn ${starship.favorite ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart"}`}
                                onClick={() =>
                                    dispatch({
                                        type: starship.favorite ? "remove_favorite" : "add_favorite",
                                        name: starship.name,
                                        category: "starship",
                                        id: starship.uid,
                                    })
                                }
                            ></button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StarshipCard;
