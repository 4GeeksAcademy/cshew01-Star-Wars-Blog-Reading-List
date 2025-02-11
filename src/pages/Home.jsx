import PlanetCard from "../components/planetCard"
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const Home = () => {
  const { store } = useGlobalReducer();

  useEffect(() => {
    console.log(store)
  }, [])

  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <h1>STAR WARS DATABASE</h1>
        <p>More information than you will ever need to know!</p>
      </div>
      <h2>PLANETS</h2>
      {store.planets?.map(planet => <PlanetCard planet={planet} key={planet.id} />)}

    </>
  );
};