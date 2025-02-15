import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
// import AddFavorites from "./favorites";

const PeopleCard = ({ people }) => {

    const { dispatch } = useGlobalReducer();

    return (
        <>
            <div className="p-2 m-2 text-bg-dark" >
                <div >
                    <div className="card">
                        <img src="https://ew.com/thmb/RKsPmLrj208FDogWd9nTC8SY_n4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EW_StarWars_20-1-6c84c9b72c6941ef9f49f96e4d3f0257.jpg" className="card-img-top" style={{ width: "300px" }} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{people.name}</h5>
                            <p className="card-text">Gender: {people.gender}</p>

                            {/* <ul className="list-group list-group-flush">
                                <li className="list-group-item text-bg-dark">Population: {people.population}</li>
                                <li className="list-group-item text-bg-dark">Diameter: {people.diameter} km</li>
                                <li className="list-group-item text-bg-dark">Rotation: {people.rotation_period} hrs with an orbit of {people.orbital_period} days </li>
                            </ul> */}

                            <Link href="#" className="card-link" to={`/details/${people.uid}`}>
                                Learn More
                            </Link>
                            <button
                                type="button"
                                className={`btn ${people.favorite ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart"}`}
                                onClick={() =>
                                    dispatch({
                                        type: people.favorite ? "remove_favorite" : "add_favorite",
                                        name: people.name,
                                        category: "people",
                                        id: people.uid,
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

export default PeopleCard;
