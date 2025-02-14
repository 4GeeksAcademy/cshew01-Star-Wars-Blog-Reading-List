import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
// import AddFavorites from "./favorites";

const PlanetCard = ({ planet }) => {

    const { dispatch } = useGlobalReducer();

    const style = {
        width: 300,
        height: 200
    };

    return (
        <>
            <div className="container p-2 m-2 text-bg-dark" >
                <div className="d-flex flex-row flex-nowrap">
                    <div className="card">
                        <img src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest/scale-to-width-down/1000?cb=20190313021755" className="card-img-top" style={style} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{planet.name}</h5>
                            <p className="card-text">{planet.climate} {planet.terrain}</p>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item text-bg-dark">Population: {planet.population}</li>
                                <li className="list-group-item text-bg-dark">Diameter: {planet.diameter} km</li>
                                <li className="list-group-item text-bg-dark">Rotation: {planet.rotation_period} hrs with an orbit of {planet.orbital_period} days </li>
                            </ul>

                            <Link href="#" className="card-link" to={`/details/${planet.uid}`}>
                                Learn More
                            </Link>
                            {/* {planet.favorite ? (<button type="button" className="btn fa-solid fa-heart" onClick={() => dispatch({
                                type: "remove_favorite",
                                name: planet.name,
                            })}></button>) : (<button type="button" className="btn fa-regular fa-heart" onClick={() => dispatch({
                                type: "add_favorite",
                                name: planet.name,
                                category: "planet",
                                id: planet.uid,
                            })}></button>)} */}

                            <button
                                type="button"
                                className={`btn ${planet.favorite ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart"}`}
                                onClick={() =>
                                    dispatch({
                                        type: planet.favorite ? "remove_favorite" : "add_favorite",
                                        name: planet.name,
                                        category: "planet",
                                        id: planet.uid,
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

export default PlanetCard;
