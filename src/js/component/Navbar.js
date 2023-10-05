import React from "react";
import { Link } from "react-router-dom";
import LogoStarWars from "../../img/starwars-pathhome.png";
import { BtnFavorites } from "./BtnFavorites.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-black mb-3">
			<Link to="/" >
				<img src={LogoStarWars} alt="Star Wars Logo" width="150" height="60" />
			</Link>
			
				<a className="nav-link" href="/characters">Characters</a>
			
				<a className="nav-link" href="/planets">Planets</a>
			
				<a className="nav-link" href="/vehicles">Vehicles</a>

				<a className="nav-link" href="/posts">Posts</a>
		
				<a className="nav-link" href="/users">Users</a>
			
			<BtnFavorites />


		</nav>
	);
};
