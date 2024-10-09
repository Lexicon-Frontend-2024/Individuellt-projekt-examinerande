/* 
Takes prop 'imgUrl' and displays the image found at the provided url.
 */
// import { ReactElement } from "react";

interface CardImgProps {
	url: string | undefined;
	alt?: string;
	caption?: string;
}

export const CardImg: React.FC<CardImgProps> = ({ url, alt = "Image", caption = "" }) => {
	return (
		<article className="card-wrapper">
			<figure className="card-img">
				<img src={url} alt={alt} />
				<figcaption>{caption}</figcaption>
			</figure>
		</article>
	);
};
