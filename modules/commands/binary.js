module.exports.config = {
	name: "binary",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "text to binary codes",
	commandCategory: "code",
	cooldowns: 1
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api-1.josh-api.repl.co/sus/binary?message=${juswa}`);
var a = res.data.code;
return api.sendMessage(`${a}`, event.threadID, event.messageID)
}