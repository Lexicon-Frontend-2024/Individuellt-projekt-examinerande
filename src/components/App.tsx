import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import "../css/App.css";
import { Footer, Header } from ".";

export function App(): ReactElement {
	return (
		<>
			{/* <FavouritesContexProvider> */}
			{/* <ScrollToTop /> */}
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
			{/* </FavouritesContexProvider> */}
		</>
	);
}
