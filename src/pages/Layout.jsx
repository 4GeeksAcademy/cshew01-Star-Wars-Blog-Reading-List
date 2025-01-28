import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {

    const { dispatch } = useGlobalReducer();

    const getData = async () => {
        const respPlanets = await fetch("https://www.swapi.tech/api/planets/");
        const dataPlanets = await respPlanets.json();
        dispatch({
            type: "load_planets",
            planets: dataPlanets.planets,
        });

        const respPeople = await fetch("https://www.swapi.tech/api/people/");
        const dataPeople = await respPeople.json();
        dispatch({
            type: "load_people",
            people: dataPeople.people,
        });

        const respVehicles = await fetch("https://www.swapi.tech/api/vehicles/");
        const dataVehicles = await respVehicles.json();
        dispatch({
            type: "load_vehicles",
            vehicles: dataVehicles.vehicles,
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <ScrollToTop>
            <Navbar />
            <Outlet />
            <Footer />
        </ScrollToTop>
    )
}