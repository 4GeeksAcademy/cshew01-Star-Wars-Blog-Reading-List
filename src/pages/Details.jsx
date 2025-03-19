import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Details = () => {
  const { uid } = useParams();
  const { store, action } = useGlobalReducer();

  useEffect(() => {
    if (!store.planets.length) {
      action.getData();
    }
    console.log("here's the store from details", store);
  }, []);

  console.log("uid from useParams", uid);
  const planet = store.planets?.find((p) => p.uid === uid);
  if (!planet) return <div>Loading</div>;

  return (
    <>
      <div className="card" style={{ width: "30rem" }}>
        <img
          className="card-img-top"
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/major-star-wars-planets-future-image.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5"
          className="card-img-top"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{planet.name}</h5>
          <p className="card-text">
            {planet.climate} {planet.terrain}
          </p>
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
            <li className="list-group-item text-bg-dark">
              Surface Water: {planet.surface_water}%
            </li>
            <li className="list-group-item text-bg-dark">
              Gravity: {planet.gravity} G's
            </li>
          </ul>
          <p className="card-text">
            This section would have some amazing information describing this
            card in far more detail; however, the API being used for this
            project doesn't contain such information.
          </p>
          <Link href="#" className="btn btn-primary card-link" to={"/"}>
            Return to Main Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default Details;
