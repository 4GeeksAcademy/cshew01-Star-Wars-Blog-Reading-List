import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const starshipDetails = () => {
  const { uid } = useParams();
  const { store, action } = useGlobalReducer();

  useEffect(() => {
    if (!store.starships.length) {
      action.getData();
    }
    console.log("here's the store from details", store);
  }, []);

  console.log("uid from useParams", uid);
  const starship = store.starships?.find((p) => p.uid === uid);
  if (!starship) return <div>Loading</div>;

  return (
    <>
      <div className="card" style={{ width: "30rem" }}>
        <img
          className="card-img-top"
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/05/best-star-wars-ships.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5"
          className="card-img-top"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{starship.name}</h5>
          <p className="card-text">{starship.model}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-bg-dark">
              Starship Class: {starship.starship_class}
            </li>
            <li className="list-group-item text-bg-dark">
              Manufactured By: {starship.manufacturer}
            </li>
            <li className="list-group-item text-bg-dark">
              Cost: {starship.cost_in_credits} credits
            </li>
            <li className="list-group-item text-bg-dark">
              Length: {starship.length} m
            </li>
            <li className="list-group-item text-bg-dark">
              Crew: {starship.crew}
            </li>
            <li className="list-group-item text-bg-dark">
              Passengers: {starship.passengers}
            </li>
            <li className="list-group-item text-bg-dark">
              Max Speed: {starship.max_atmosphering_speed}
            </li>
            <li className="list-group-item text-bg-dark">
              Hyperdrive Rating: {starship.hyperdrive_rating}
            </li>
            <li className="list-group-item text-bg-dark">
              Cargo Capacity: {starship.cargo_capacity} kg
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

export default starshipDetails;
