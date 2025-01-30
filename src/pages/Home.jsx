// import rigoImageUrl from "../assets/img/rigo-baby.jpg";
// import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// export const Home = () => {

//   const {store, dispatch} =useGlobalReducer()

// 	return (
// 		<div className="text-center mt-5">
// 			<h1>Hello Rigo!!</h1>
// 			<p>
// 				<img src={rigoImageUrl} />
// 			</p>
// 		</div>
// 	);
// }; 

import CardCreator from "../components/CardCreator";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Home = () => {
  const { store }  = useGlobalReducer();
  
  return (
    <div className="container d-flex flex-column align-items-center">
      { store.planets.map(planet => <CardCreator planet={planet} key={planet.id} />) }
      {/* {store.planets[0]?.name} */}
    </div>
  );
};