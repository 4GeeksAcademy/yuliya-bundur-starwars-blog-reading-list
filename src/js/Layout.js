import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Users } from "./views/Users.jsx";
import { UserDetails } from "./views/UserDetails.jsx";
import { Posts } from "./views/Posts.jsx";
import { ViewCharacters } from "./views/ViewCharacters.jsx";
import { Characters } from "./views/Characters.jsx";

import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div style={{ backgroundColor: "#0a0909"}}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/users" element={<Users/>} />
						<Route path="/users/:userId" element={<UserDetails/>}/>
						<Route path="/posts" element={<Posts/>} />
						<Route path="/viewcharacter" element={<ViewCharacters/>}/>
						<Route path="/characters/" element={<Characters />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
