import { Link } from "react-router-dom";
import Favorites from "../components/favorites"
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store } = useGlobalReducer();

	console.log("Favorites in Navbar:", store.favs);

	return (
		<ul className="nav nav-tabs justify-content-end">
			<li className="nav-item dropdown">
				<button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" href="#" aria-expanded="false">Favorites </button>
				<ul className="dropdown-menu">
					{store.favs?.map(favorite => <Favorites favorite={favorite} key={favorite.id} />)}
				</ul>
			</li>
		</ul>
	);
};
