import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import PlanetCard from "../components/planetCard.jsx";
import { useActionState } from "react";


const Details = () => {
  const { uid } = useParams();
  const { store, action } = useGlobalReducer();
  
  useEffect(()=>{
    if (!store.planets.length) {action.getData()}
    console.log("here's the store from details", store)
  },[])

  console.log("uid from useParams", uid);
  const planet = store.planets?.find((p)=>p.uid===uid)
  if (!planet) return <div>Loading</div>

  return (
    <>
      <div>test Details UID:{uid}</div>

      <div class="card" style={{ width: "30rem" }}>
        <img
          class="card-img-top"
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/major-star-wars-planets-future-image.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5"
          className="card-img-top"
          style={{ width: "100%" }}
        />
        <div class="card-body">
          <h5 class="card-title">{planet.name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-bg-dark">
              Population: {planet.population}
            </li>
            <li className="list-group-item text-bg-dark">
              Diameter: {planet.diameter} km
            </li>
            <li className="list-group-item text-bg-dark">
              Rotation: {planet.rotation_period} hrs with an orbit of{" "}
              {planet.orbital_period} days{" "}
            </li>
          </ul>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Details;
