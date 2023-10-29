const fs = require('fs-extra');
const pathFile = __dirname + '/cache/echo.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
module.exports.config = {
	name: "echo",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Deku",
	description: "Enable/disable echo",
	commandCategory: "...",
	usages: "on/off",
	cooldowns: 0
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true')
    api.sendMessage(event.body, event.threadID);
};

module.exports. run = async ({ api, event, args }) => {
  try {
	if (args[0] == 'on') {
	  fs.writeFileSync(pathFile, 'true');
	  api.sendMessage('Echo on successfully', event.threadID, event.messageID);
	}
	else if (args[0] == 'off') {
	  fs.writeFileSync(pathFile, 'false');
	  api.sendMessage('Echo off successfully', event.threadID, event.messageID);
	}
	else {
	  api.sendMessage('wrong format use echo off/on', event.threadID, event.messageID);
	}
  }
  catch(e) {
    console.log(e);
  }
};