const fs = require("fs");
module.exports.config = {
	name: "iloveyou",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dstryr.official ", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("developer")==0 || (event.body.indexOf("credits")==0)) {
		var msg = {
				body: "Developer: Rejard Bentazar Gwapo ",
				attachment: fs.createReadStream(__dirname + `/noprefix/.`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }