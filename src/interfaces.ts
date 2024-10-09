interface ICardImageUris {
	small: string;
	normal: string;
	large: string;
	png: string;
	art_crop: string;
	border_crop: string;
}

export interface ICard {
	// metadata
	object: string;
	id: string;
	released_at: Date;
	uri: string;
	scryfall_uri: string;
	image_uris: ICardImageUris;

	// card info (gameplay-relevant properties)
	name: string;
	mana_cost: string;
	cmc: number;
	type_line: string;
	oracle_text: string;
	colors: [string];
	color_identity: string[];

	// misc
	set: string;
	rarity: string;
	legalities: {
		standard: string;
		modern: string;
		legacy: string;
		vintage: string;
		pioneer: string;
		historic: string;
		commander: string;

		[key: string]: string; // catch-all for any additional formats. (any other field under 'legalities' will be typed as a string)
	};
}
