import React from "react";
import { Link } from "react-router-dom";
import LogoStarWars from "../../img/starwars-pathhome.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-black mb-3">
			<Link to="/" >
			<img src={LogoStarWars} alt="Star Wars Logo" width="150" height="60" />
			</Link>
			<div className="ml-auto" style={{ marginRight: "20px" }}>
				<Link to="/demo">
					<button className="btn btn-outline-warning">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
