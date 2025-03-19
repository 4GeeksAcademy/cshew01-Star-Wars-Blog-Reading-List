import { json, Outlet } from "react-router-dom/dist";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
  const { dispatch } = useGlobalReducer();

  const getData = async () => {
    fetch("https://www.swapi.tech/api/planets/")
      .then((resp) => resp.json())
      .then((planetData) => {
        const planetResps = planetData.results.map((planet) =>
          fetch(planet.url)
        );

        Promise.all(planetResps)
          .then((resps) => {
            const allResps = resps.map((resp) => resp.json());
            return Promise.all(allResps);
          })
          .then((planetData) => {
            const allJson = planetData.map((planet) => ({
              uid: planet.result.uid,
              _id: planet.result._id,
              favorite: false,
              ...planet.result.properties,
            }));
            dispatch({
              type: "load_planets",
              planets: allJson,
            });
          });
      });
  };

  const getStarships = async () => {
    fetch("https://www.swapi.tech/api/starships/")
      .then((resp) => resp.json())
      .then((starshipData) => {
        const starshipResps = starshipData.results.map((starship) =>
          fetch(starship.url)
        );

        Promise.all(starshipResps)
          .then((resps) => {
            const allResps = resps.map((resp) => resp.json());
            return Promise.all(allResps);
          })
          .then((starshipData) => {
            const allJson = starshipData.map((starship) => ({
              uid: starship.result.uid,
              _id: starship.result._id,
              favorite: false,
              ...starship.result.properties,
            }));
            dispatch({
              type: "load_starships",
              starships: allJson,
            });
            // setData(allJson);
          });
      });
  };

  const getPeople = async () => {
    fetch("https://www.swapi.tech/api/people/")
      .then((resp) => resp.json())
      .then((peopleData) => {
        const peopleResps = peopleData.results.map((people) =>
          fetch(people.url)
        );

        Promise.all(peopleResps)
          .then((resps) => {
            const allResps = resps.map((resp) => resp.json());
            return Promise.all(allResps);
          })
          .then((peopleData) => {
            const allJson = peopleData.map((people) => ({
              uid: people.result.uid,
              _id: people.result._id,
              favorite: false,
              ...people.result.properties,
            }));
            dispatch({
              type: "load_people",
              people: allJson,
            });
            // setData(allJson);
          });
      });
  };
  useEffect(() => {
    getData();
    getStarships();
    getPeople();
  }, []);

  return (
    <ScrollToTop>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </ScrollToTop>
  );
};
