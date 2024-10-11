import { FormEvent, ReactElement, useState } from "react";
import { IDeck, IDecklistEntry } from "../interfaces";
import { capitalizeWords, parseCardName } from "../utils";
export function DeckBuilder(): ReactElement {
	// raw textbox data:
	const [rawDeckName, setRawDeckName] = useState("");
	const [rawDeckMain, setRawDeckMain] = useState("");
	const [rawDeckSB, setRawDeckSB] = useState("");

	// lists of decklist entry objects (one entry: one name and one number)
	const [deckName, setDeckName] = useState<string>("");
	const [deckMain, setDeckMain] = useState<IDecklistEntry[]>([]);
	const [deckSB, setDeckSB] = useState<IDecklistEntry[]>([]);
	const [deck, setDeck] = useState<IDeck>({
		name: deckName,
		main: deckMain,
		sideboard: deckSB,
	});

	async function toDecklistEntry(input: string): Promise<IDecklistEntry | null> {
		// takes a single decklist entry/line from a string to an IDecklistEntry object
		// input:       "4 Mox Opal"
		// returns:     {name: "Mox Opal", count: 4}
		//
		//returns null line can't be parsed

		if (input.length === 0) {
			//data validation
			return null;
		}

		// ...extract name and count:
		const cardCountStr = input.split(" ", 1)[0]; // '4 Mox Opal' -> '4'
		const cardNameStr = input.slice(cardCountStr.length + 1); // '4 Mox opal' -> 'Mox opal'
		const cardNameStrCapitalized = cardNameStr.slice(0, cardNameStr.length);
		const decklistEntry = {
			name: capitalizeWords(cardNameStr),
			count: parseInt(cardCountStr),
		};
		// console.log("decklistEntry", decklistEntry);

		if (
			// more data validation
			decklistEntry.name.length === 0 ||
			decklistEntry.count === 0
		) {
			return null;
		}
		return decklistEntry; // format: {name: "Mox Opal", count: 4}
	}

	const handleSaveDeck = async (e: FormEvent<HTMLFormElement>): Promise<IDecklistEntry | void> => {
		e.preventDefault();

		console.log("");
		console.log("### in handleSaveDeck...");

		// create arrays from form data
		let deckMainArrDirty = rawDeckMain.split("\n");
		let deckSBArrDirty = rawDeckSB.split("\n");

		// current format:
		// [
		// "4 Mox Opal",
		// "4 Island",
		// ]

		let deckMainArr: IDecklistEntry[] = [];
		let deckSBArr: IDecklistEntry[] = [];

		// maindeck:
		// convert each text line into an IDecklistEntry.
		// "4 Mox Opal" -> {name:"Mox Opal", count:4}
		for (const textLine of deckMainArrDirty) {
			if (textLine.length == 0) {
				// skip empty lines.
				continue;
			}
			let newEntry: IDecklistEntry | null = await toDecklistEntry(textLine);
			// data validation
			if (newEntry !== null) {
				// don't push entry if it is = null instead of being of type IDecklistEntry).
				if (
					newEntry.name.length !== 0 && // name must not be empty string
					!Number.isNaN(newEntry.count) && // count must be a number...
					newEntry.count >= 1 // ...that is greater than 0
				) {
					deckMainArr.push(newEntry); // decklist entry successfully added to decklist.
				}
			}
		}

		console.log("deckMainArr", deckMainArr);

		// sideboard:
		// convert each text line into an IDecklistEntry.
		// "4 Mox Opal" -> {name:"Mox Opal", count:4}
		for (const textLine of deckSBArrDirty) {
			if (textLine.length == 0) {
				// skip empty lines.
				continue;
			}
			let newEntry: IDecklistEntry | null = await toDecklistEntry(textLine);
			// data validation
			if (newEntry !== null) {
				// don't push entry if it is = null instead of being of type IDecklistEntry).
				if (
					newEntry.name.length !== 0 && // name must not be empty string
					!Number.isNaN(newEntry.count) && // count must be a number...
					newEntry.count >= 1 // ...that is greater than 0
				) {
					deckSBArr.push(newEntry); // decklist entry successfully added to decklist.
				}
			}
		}
		console.log("deckSBArr", deckSBArr);

		// decklist arrays completed!
		setDeckName(rawDeckName);
		setDeckMain(deckMainArr);
		setDeckSB(deckSBArr);
		setDeck({
			name: rawDeckName,
			main: deckMain,
			sideboard: deckSB,
		});

		// create decklist array with ICard objects ()
		// ...TODO

		// deckbuilding rules (>=60 cards. <=4 of a kind)
		// ...TODO

		// save deck to LocalStorage
		// ...
		console.log("deck:", deck);

		localStorage.setItem("deck", await JSON.stringify(deck));
	};

	const handleLookup = async (cname: string) => {
		const resp = await parseCardName(cname);
		console.log("cname length", cname.length);
		console.log("resp length", resp.length);
	};

	return (
		<>
			<section id="deckBuilder">
				<input type="text" id="searchtext" />
				<button onClick={() => handleLookup("Mox Opal")}>"Mox Opal"</button>
				<button onClick={() => handleLookup("Mox opal")}>"Mox opal"</button>
				<button onClick={() => handleLookup("MOX OPAL")}>"MOX OPAL"</button>
				<button onClick={() => handleLookup("mox opal")}>"mox opal"</button>
				<button onClick={() => handleLookup("Moxopal")}>"Moxopal"</button>
				<button onClick={() => handleLookup("moxpal")}>"moxpal"</button>
				{/* <form action=""></form> */}
				<form id="decklist-form" onSubmit={handleSaveDeck}>
					<input //
						name="deckName"
						id="deckName"
						placeholder="Deck name"
						value={rawDeckName}
						onChange={(e) => setRawDeckName(e.target.value)}
					/>
					<textarea //
						name="deckMain"
						id="deckMain"
						placeholder="Main deck"
						rows={20}
						value={rawDeckMain}
						onChange={(e) => setRawDeckMain(e.target.value)}
					></textarea>
					<textarea //
						name="deckSB"
						id="deckSB"
						placeholder="Sideboard"
						rows={8}
						value={rawDeckSB}
						onChange={(e) => setRawDeckSB(e.target.value)}
					></textarea>
					<button type="submit">Save deck</button>
				</form>
			</section>
		</>
	);
}

/*

        <form id="searchDrinkForm" onSubmit={props.handleSubmitSearch}>
            <label htmlFor="searchFormInput">What do you want to drink?</label>
            <div>
                <input
                    autoFocus
                    className="input"
                    id="searchFormInput"
                    onChange={(e) => props.setSearchDrink(e.target.value)}
                    placeholder="I feel like a..."
                    type="text"
                    value={props.searchDrink}
                />
                <button>Search</button>
            </div>
        </form>


*/
