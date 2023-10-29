const deku = "Deku";
module.exports.config = {
	name: "wanted",
	version: "1.0.0",
	hasPermssion: 0,
	credits: `${deku}`,
	description: "wanted",
	commandCategory: "edit-img",
	usages: `bounty`,
  cooldowns: 0
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = require("fs-extra");
  const axios = require("axios");
  let pathImg = __dirname + `/cache/${event.threadID}_${event.senderID}.png`;
 // var a = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//  var b = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//  let aa = a[Math.foor(Math.random() * a.length)];
 // let bb = b[Math.foor(Math.random() * b.length)];
 // var c = [aa, bb];
 // let cc = c[Math.floor(Math.random() * c.length)];
  //so magiging ganto siya ${a},${a}${b}${a},${a}${b}${b}
//result example: 1,123,456
//then what if i random ko haha diba
 // var c = [`${aa},${aa}${bb}${aa},${aa}${bb}${bb}`, `${aa},${aa}${bb}${aa},${aa}${bb}${bb}`,`${aa}${bb}${aa},${aa}${bb}${bb}`, `${aa},${aa}${bb}${bb}`];
 // let bounty1 = c[Math.floor(Math.random() * c.length)];
  //let pathAva = __dirname + `/cache/a${event.senderID}.png`;
  //let text = args.join(" ")
 // if (!text) return api.sendMessage(`Wrong fomat\nUse: ${global.config.PREFIX}${this.config.name} bounty`, event.threadID, event.messageID);
  //var bounty = ["1,234", "9,999", "6,969", "1,000", "6,666", "8,981", "10,000", "1,000,000", "2,671", "69,761"];
  var bounty1 = Math.floor(Math.random() * 1000000) +1000
  //let bounty1 = bounty[Math.floor(Math.random() * bounty.length)];
  var text = args[0] || bounty1;
  let uid = event.senderID;
  const res = await api.getUserInfoV2(uid);
  let getWanted = (
    await axios.get(`https://api.reikomods.repl.co/sus/wanted?uid=${uid}&bounty=${text}&name=${res.first_name} D. Luffy`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
  let baseImage = await loadImage(pathImg);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
  