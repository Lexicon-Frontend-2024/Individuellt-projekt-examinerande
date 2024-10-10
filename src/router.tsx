import { createBrowserRouter } from "react-router-dom";
import { DeckBuilder, LandingPage } from "./pages";
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
			{
				path: "/deckbuilder",
				element: <DeckBuilder />,
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
