module.exports.config = {
	name: "tid",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "get tid",
	commandCategory: "...",
	cooldowns: 1,
  };
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
  const res = await api.getUserInfoV2(event.senderID);
var name = res.first_name; 
  return api.sendMessage(`Hello master 『${name}』, bot is running » ${hours}:${minutes}:${seconds} «\nThe ID of this group chat is: \n» ${event.threadID} «`,event.threadID, event.messageID);
}