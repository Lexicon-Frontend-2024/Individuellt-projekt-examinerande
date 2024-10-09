import { ICard } from "../interfaces";
import { baseURL } from "../utils";

// export const randomCardLoader = async (): Promise<IMtgCard> => {
export const randomCardLoader = async (): Promise<ICard> => {
	const resp: Response = await fetch(`${baseURL}/cards/random/`);
	const data = await resp.json();

	return data;
};
