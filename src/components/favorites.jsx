import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Favorites = ({ favorite }) => {
  const { dispatch } = useGlobalReducer();
  let path = "";

  const handleRemoveFavorite = () => {
    console.log("remove favorite");
    dispatch({
      type: "remove_favorite",
      name: favorite.name,
    });
  };

  if (favorite.category === "planet") {
    path = "details";
  } else if (favorite.category === "starship") {
    path = "starshipDetails";
  } else {
    path = "peoplDetails";
  }

  return (
    <li className="d-flex justify-content-between align-items-center">
      <Link href="#" to={`/${path}/${favorite.id}`}>
        {favorite.name}
      </Link>
      <button
        className="btn fa-regular fa-trash-can"
        onClick={() => handleRemoveFavorite()}
      ></button>
    </li>
  );
};

export default Favorites;
