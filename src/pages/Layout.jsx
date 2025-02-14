import { json, Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {

    const { dispatch } = useGlobalReducer();

    const getData = async () => {
        fetch("https://www.swapi.tech/api/planets/")
            .then(resp => resp.json())
            .then(planetData => {
                const planetResps = planetData.results.map((planet) => fetch(planet.url));

                Promise.all(planetResps)
                    .then(resps => {
                        const allResps = resps.map(resp => resp.json());
                        return Promise.all(allResps);
                    }).then(planetData => {
                        const allJson = planetData.map((planet) => ({uid: planet.result.uid, _id: planet.result._id, favorite: false, ...planet.result.properties}));
                        dispatch({
                            type: "load_planets",
                            planets: allJson,
                        });
                        // setData(allJson);
                    });
            });
    };


    useEffect(() => {
        getData();
    }, []);

    return (
        <ScrollToTop>
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </ScrollToTop>
    )
}

// const Layout = () => {
// 	//the basename is used when your project is published in a subdirectory and not in the root of the domain
// 	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
// 	const basename = process.env.BASENAME || "";

// 	return (
// 		<div>
// 			<BrowserRouter basename={basename}>
// 				<ScrollToTop>
// 					<Navbar />
// 					<Routes>
// 						<Route path="/" element={<Home />} />
// 						<Route path="/demo" element={<Demo />} />
// 						<Route path="/single/:theid" element={<Single />} />
// 						<Route path="/characterDescription/:id" element={<CharacterDescription />} />
// 						<Route path="/planetDescription/:id" element={<PlanetDescription />} />
// 						<Route path="/starShipDescription/:id" element={<StarShipDescription />} />
// 						<Route path="*" element={<h1>Not found!</h1>} />
// 					</Routes>
// 					<Footer />
// 				</ScrollToTop>
// 			</BrowserRouter>
// 		</div>
// 	);
// };

// export default injectContext(Layout);