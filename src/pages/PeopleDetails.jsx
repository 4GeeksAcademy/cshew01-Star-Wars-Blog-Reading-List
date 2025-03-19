import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const peopleDetails = () => {
  const { uid } = useParams();
  const { store, action } = useGlobalReducer();

  useEffect(() => {
    if (!store.people.length) {
      action.getData();
    }
    console.log("here's the store from details", store);
  }, []);

  console.log("uid from useParams", uid);
  const person = store.people?.find((p) => p.uid === uid);
  if (!person) return <div>Loading</div>;

  return (
    <>
      <div className="card" style={{ width: "30rem" }}>
        <img
          className="card-img-top"
          src="https://ew.com/thmb/RKsPmLrj208FDogWd9nTC8SY_n4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EW_StarWars_20-1-6c84c9b72c6941ef9f49f96e4d3f0257.jpg"
          className="card-img-top"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{person.name}</h5>
          <p className="card-text">Born: {person.birth_year}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-bg-dark">
              Gender: {person.gender}
            </li>
            <li className="list-group-item text-bg-dark">
              Skin Color: {person.skin_color}
            </li>
            <li className="list-group-item text-bg-dark">
              Hair Color: {person.hair_color}
            </li>
            <li className="list-group-item text-bg-dark">
              Eye Color: {person.eye_color}
            </li>
            <li className="list-group-item text-bg-dark">
              Height: {person.height} cm
            </li>
            <li className="list-group-item text-bg-dark">
              Weight: {person.mass} kg
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

export default peopleDetails;
