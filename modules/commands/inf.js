module.exports.config = {
	name: "inf",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
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
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/ONBKyt3.jpg", "https://i.imgur.com/DmWkFyX.jpg", "https://i.imgur.com/mGqnDv8.jpg", "https://i.imgur.com/dyygkSs.jpg", "https://i.imgur.com/wineidQ.jpg", "https://i.imgur.com/gH2FAab.jpg", "https://i.imgur.com/4R7t7E4.jpg", "https://i.imgur.com/chViahZ.jpg"];
var callback = () => api.sendMessage({body:`BOT INFO

BOT PREFIX : ${global.config.PREFIX}
BOT NAME : ${global.config.BOTNAME}
BOT CREATOR : facebook.com/${global.config.CREATOR}
BOT OWNER : facebook.com/${global.config.OWNER}

➟UPTIME

✬Today is: ${juswa} 

➳Bot is running ${hours}:${minutes}:${seconds}.

✫Thanks for using ${global.config.BOTNAME} Bot!`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };