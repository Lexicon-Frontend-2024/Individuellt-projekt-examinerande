export const baseURL = "https://api.scryfall.com";

// "https://api.scryfall.com/cards/random/"
// https://scryfall.com/cards/search?q="mox opal"
// https://api.scryfall.com/cards/named?exact=mox+opal

export async function parseCardName(cardName: string) {
	// reurns formatted card name if card exists, otherwise returns empty string
	let okSoFar = true;
	let retVal: string = "";

	try {
		let searchStr = cardName.replace(" ", "+");
		// Send fetch request
		const resp = await fetch(`${baseURL}/cards/named?exact=${cardName}`);
		let data = await resp.json();
		// retVal = await data;

		console.log("we got here");
		if ((await data.object) === "error") {
			console.log("is error. returning empty string");
			retVal = "";
			okSoFar = false;
		} else if ((await data.object) === "card") {
			console.log("is card returning true");
			retVal = data.name;
		}
		console.log("we got here too");
	} catch (e) {
		okSoFar = false;
		// console.error(e);
	}
	if (okSoFar) {
		console.log("retVal:", retVal);
		return retVal;
	} else {
		console.log("retVal:", retVal);
		return retVal;
	}
}
