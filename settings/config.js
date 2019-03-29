module.exports = {
	INVITETOGROUPID: "30395005", // Invite users to this group
	PLAYGAMES: ["AVIATOR CARD BOT #1", 730], // List of appid's/names. Names will be played as non steam games. First game entered will show on profile, others will be idled in the background.
	COMMENTAFTERTRADE: "Thanks for trading with Aviator's level up service!",
	MAXHOURSADDED: 168, // The bot will remove users after 168 hours (1 week) of inactivity.
	ADMIN: "76561198152561151", // Repeat pattern for more admins
	KEYSFROMGAME: 730, // 730 = CSGO, 440 = TF2
	MAXMSGPERSEC: 2, // The amount of messages users can send every second without getting removed.
	MESSAGES: {
		WELCOME: "Hello! I am a CSGO Key card bot. Use !check, !buy or !help.",
		HELP:
			"This is a card bot. You can use !check to check how many sets you can buy in total. If you want to know how many sets you can buy for a specific amount of keys use !check [amount of keys]. To buy sets use !buy [amount of keys].",
		MORE_INFO:
			"For a full list of commands or additional service please visit our steam group: www.steamcommunity.com/groups/AviatorLVLUP",
		SELLHELP:
			"You are also able to sell sets. You can do this by using !sell [amount of keys].",
		GAME: "This card bot accepts CSGO KEYS!",
		GROUP: "Join our steam group: www.steamcommunity.com/groups/AviatorLVLUP",
		MAXLEVEL: 1000, // Max level you can request using !level
		MAXBUY: 100, // Max keys you can buy sets for at a time
		MAXSELL: 100 // Max keys you can sell sets for at a time
	}
}
