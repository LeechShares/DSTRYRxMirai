const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsLink = 5
const fontsInfo = 30
const colorName = "#000000"
module.exports.config = {
  name: "cardtech",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "create cardinfo",
  commandCategory: "info",
  cooldowns: 2,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
  if ((this.config.credits) != "Joshua Sy") { return api.sendMessage(`inamo change credits pa`, event.threadID, event.messageID)}
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const Canvas = global.nodemodule["canvas"];
  let pathImg = __dirname + `/cache/${senderID}123${threadID}.png`;
  let pathAvata = __dirname + `/cache/avtuserrd.png`;
  /*                 */
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
    const res = await api.getUserInfoV2(uid); 
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://i.imgur.com/nX5W2Ru.jpg`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  avataruser = await this.circle(pathAvata);
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));

/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`${fonts}`)) { 
      let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`${fonts}`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/

  let baseImage = await loadImage(pathImg);
  let baseAvata = await loadImage(avataruser);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvata, 1100, 550, 400, 400);
    var gender = res.gender == 'male' ? "Male" : res.gender == 'female' ? "Female" : "Not Found";
    var birthday = res.birthday ? `${res.birthday}` : "Not Found";
    var love = res.relationship_status ? `${res.relationship_status}` : "Not Found"
    var location = res.location.name ? `${res.location.name}` : "Not Found"
    var hometown = res.hometown.name ? `${res.hometown.name}` : "Not Found"
  Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Play-Bold"
    });
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#00bbff";
  ctx.textAlign = "start";
  fontSize = 25;
  ctx.fillText(`Name: ${res.name}`, 150, 122);
  ctx.fillText(`Gender: ${gender}`, 150, 132);
  ctx.fillText(`Followers: ${res.follow}`, 150, 142);
  ctx.fillText(`Relationship: ${love}`, 150, 152);
  ctx.fillText(`Birthday: ${birthday}`, 150, 162);
  ctx.fillText(`Location: ${location}`, 150, 172);
  ctx.fillText(`UID: ${uid}`, 150, 182);
  ctx.font = `${fontsLink}px Play-Bold`;
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "start";
  fontSize = 20;  
  ctx.fillText(`${res.link} `, 180, 468);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvata);
  
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};