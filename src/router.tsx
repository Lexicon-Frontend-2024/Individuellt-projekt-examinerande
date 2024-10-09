import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages";
import { App } from "./components";
// import { cocktailInfoLoader, randomCocktailLoader, ingredientLoader } from "./loaders";

import { randomCardLoader } from "./loaders";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <LandingPage />,
				loader: randomCardLoader,
			},
			// {
			// 	path: "/search",
			// 	element: <SearchPage />,
			// },
			// {
			// 	path: "*",
			// 	element: <NotFound />,
			// },
		],
	},
]);
