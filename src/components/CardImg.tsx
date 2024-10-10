/* 
Takes prop 'imgUrl' and displays the image found at the provided url.
 */
// import { ReactElement } from "react";

import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { ICard } from "../interfaces";

/* 	interface CardImgProps {
	imgUrl: string | undefined;
	link?: string;
	alt?: string;
	caption?: string;
} */

// export const CardImg: React.FC<CardImgProps> = ({ imgUrl, alt = "Image", caption = "" }) => {
// export const CardImg: React.FC<ICard> = ({ card: ICard }) => {
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
