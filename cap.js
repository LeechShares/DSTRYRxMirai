module.exports.config = {
	name: "ss",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Horizon",
	description: "Take a screenshot of a profile fb",
	commandCategory: "Công cụ",
	usages: "cap [link]",
	cooldowns: 5,
};
module.exports.run = async function({ event, api , args, client, global }) {
    var fs = require("fs-extra");
    if (!args[0]) {
        var Data = await api.Screenshot('https://www.facebook.com/profile.php?id='+ event.senderID);
        fs.writeFileSync(__dirname + `/cache/${event.senderID}.png`, Data, "utf-8");
        return api.sendMessage({attachment: fs.createReadStream(__dirname + `/cache/${event.senderID}.png`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}.png`), event.messageID);
    }
    else {
        var Data = await api.Screenshot(args[0]);
        fs.writeFileSync(__dirname + `/cache/${event.senderID}.png`, Data, "utf-8");
        return api.sendMessage({attachment: fs.createReadStream(__dirname + `/cache/${event.senderID}.png`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}.png`), event.messageID);
    }

}