module.exports.config = {
	name: "wyr",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "Get Would You Rather Questions!",
	commandCategory: "...",
	cooldowns: 5
};
module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.popcat.xyz/wyr`);
var op1 = res.data.ops1;
var op2 = res.data.ops2;
return api.sendMessage(`Option 1: ${op1}\n\nOption 2: ${op2}`, event.threadID, event.messageID)
}