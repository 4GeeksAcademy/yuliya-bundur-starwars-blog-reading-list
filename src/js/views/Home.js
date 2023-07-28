import React from "react";
import starwarsHome from "../..//img/star-wars-disponible-netflix-1024x682.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5" style={{ backgroundColor: "#0a0909"}} >
		<p>
			<img src={starwarsHome} className="border border-dark mt-3" alt="Star Wars Home" width="600" height="400"/>
		</p>
		<a href="#" className="btn btn-outline-light mb-2">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
