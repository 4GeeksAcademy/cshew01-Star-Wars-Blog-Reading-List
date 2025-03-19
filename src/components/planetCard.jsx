import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const PlanetCard = ({ planet }) => {
  const { dispatch } = useGlobalReducer();

  return (
    <>
      <div className="p-2 m-2 text-bg-dark">
        <div>
          <div className="card">
            <img
              src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/major-star-wars-planets-future-image.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5"
              className="card-img-top"
              style={{ width: "300px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text">
                {planet.climate} {planet.terrain}
              </p>

              <Link
                href="#"
                className="card-link"
                to={`/details/${planet.uid}`}
              >
                Learn More
              </Link>
              <button
                type="button"
                className={`btn ${
                  planet.favorite
                    ? "fa-solid fa-heart text-danger"
                    : "fa-regular fa-heart"
                }`}
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
  );
};

export default PlanetCard;
