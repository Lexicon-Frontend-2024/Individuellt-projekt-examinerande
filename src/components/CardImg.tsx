/* 
Card image that links to an external info page (scryfall)

Prop: card
object. accepts unaltered single card from API response.

keys: 
.name
	the name of an MTG card. string.
.image_uris.png
	the url to an image. string.
*/

import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { ICard } from "../interfaces";

export function CardImg({ card }: { card: ICard }): ReactElement {
	return (
		<article className="card-wrapper">
			<Link to={card.scryfall_uri}>
				<figure className="card-fig">
					<img className="card-img" src={card.image_uris.png} alt={card.name} />
					{/* <figcaption>{card.name}</figcaption> */}
				</figure>
			</Link>
		</article>
	);
}
