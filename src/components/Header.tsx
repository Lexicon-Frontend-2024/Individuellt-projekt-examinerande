import { ReactElement } from "react";
// import { Link } from "react-router-dom";
// import { NavBar } from "./NavBar";
import { NavBar } from ".";

export function Header(): ReactElement {
	return (
		<header>
			{/* <Link to="/"> */}
			<h1 id="header-title">MTG Deck Builder</h1>
			{/* </Link> */}
			<NavBar />
		</header>
	);
}
