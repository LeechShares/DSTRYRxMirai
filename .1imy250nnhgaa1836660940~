module.exports.config = {
	name: "morsetext",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "morse code to text",
  usages: "[morse code]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api.rest-api-1.repl.co/morse/decode?message=${juswa}`);
var code = res.data.message;
return api.sendMessage(`${code}`, event.threadID, event.messageID)
}