import PlanetCard from "../components/planetCard"
import StarshipCard from "../components/starshipCard"
import PeopleCard from "../components/peopleCard"
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const Home = () => {
  const { store } = useGlobalReducer();

  useEffect(() => {
    console.log(store)
  }, [])

  return (
    <>
      <div className="container d-flex align-items-center flex-column">
        <h1>STAR WARS DATABASE</h1>
        <p>More information than you will ever need to know!</p>
      </div>
      <h2>PLANETS</h2>
      <div className="container-fluid d-flex flex-row flex-nowrap scrollmenu" style={{ maxWidth: "100%" }}>
        {store.planets?.map(planet => <PlanetCard planet={planet} key={planet._id} />)}
      </div>
      <h2>STARSHIPS</h2>
      <div className="container-fluid d-flex flex-row flex-nowrap scrollmenu" style={{ maxWidth: "100%" }}>
        {store.starships?.map(starship => <StarshipCard starship={starship} key={starship._id} />)}
      </div>
      <h2>PEOPLE</h2>
      <div className="container-fluid d-flex flex-row flex-nowrap scrollmenu" style={{ maxWidth: "100%" }}>
        {store.people?.map(people => <PeopleCard people={people} key={people._id} />)}
      </div>
    </>
  );
};