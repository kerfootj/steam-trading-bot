/****************************************************************
 * Project          : Steam Trading Card Bot                    *
 * Program Name     : index.js                                  *
 * Author           : Joel Kerfoot (PCAviator18)                *
 * Date             : 2019-03-28                                *
 * Version          : 0.1.0                                     *
 *                                                              *
 * TODO             : Set rates via message from admin          *
 ****************************************************************/

const SteamUser = require("steam-user")
const SteamTotp = require("steam-totp")
const SteamCommunity = require("steamcommunity")
const TradeOfferManager = require("steam-tradeoffer-manager")

const CONFIG = require("./settings/config.js")
const CREDENTIALS = require("./settings/credentials.js")

const client = new SteamUser()
const community = new SteamCommunity()
const manager = new TradeOfferManager({
	steam: client,
	community: community,
	language: "en"
})

const logOnOptions = {
	accountName: CREDENTIALS.USERNAME,
	password: CREDENTIALS.PASSWORD,
	twoFactorCode: SteamTotp.generateAuthCode(CREDENTIALS.SHAREDSECRET)
}

client.logOn(logOnOptions)

/* Log into Steam */
client.on("loggedOn", () => {
	console.log("Logged into Steam")

	client.setPersona(SteamUser.EPersonaState.Online)
	client.gamesPlayed(730)
})

client.on("friendRelationship", (steamid, relationship) => {
	/* Pending Invite */
	if (relationship === 2) {
		client.addFriend(steamid)
		client.chatMessage(steamid, CONFIG.MESSAGES.WELCOME)
	}
})

/* Steam Client webSession Event Listener */
client.on("webSession", (sessionid, cookies) => {
	manager.setCookies(cookies)

	community.setCookies(cookies)
	community.startConfirmationChecker(10000, CONFIG.IDENTITYSECRET)
})

/* Trade Manager newOffer Event Listener */
manager.on("newOffer", offer => {
	/* Accept all offers from PCAviator18 */
	if (offer.partner.getSteamID64() === CONFIG.ADMIN) {
		offer.accept((err, status) => {
			if (err) {
				console.log(err)
			} else {
				console.log(`Accepted offer. Status: ${status}`)
			}
		})
	} else if (offer.itemsToGive.length === 0) {
		/* Accpet all donations */
		offer.accept((err, status) => {
			if (err) {
				console.log(err)
			} else {
				console.log(`Donation Accepted. Status: ${status}`)
			}
		})
	} else {
		/* Decline remaining trades */
		offer.decline(err => {
			if (err) {
				console.log(err)
			} else {
				console.log("Trade declined")
			}
		})
	}
})
