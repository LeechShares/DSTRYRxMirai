const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"//"https://www.fontsquirrel.com/fonts/download/amatic" 
const fontsLink = 80
const fontsInfo = 80
const colorName = "#000000"
module.exports.config = {
  name: "cardinfo1",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",//wag nyo change credits mga bwakanangshit
  description: "create card info",
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
  if ((this.config.credits) != "Joshua Sy") { return api.sendMessage(`Ulol change credits pa bobo`, event.threadID, event.messageID)}
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
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://www.wallpapertip.com/wmimgs/81-810747_png-picsart-hd-download.jpg`), {
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
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);v
  ctx.drawImage(baseAvata, 425, 457, 400, 400);
    var gender = res.gender == 'male' ? "Male" : res.gender == 'female' ? "Female" : "not found";
    var birthday = res.birthday == "Không Có Dữ Liệu" ? "Not Found" : `${res.birthday}`;
    var love = res.relationship_status == "Không Có Dữ Liệu" ? "Not Found" : `${res.relationship_status}`;
    var location = res.location.name ? `${res.location.name}` : "not found"
    var hometown = res.hometown.name ? `${res.hometown.name}` : "Not Found"
  Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Play-Bold"
    });
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#0b7c9b";
  ctx.textAlign = "start";
  fontSize = 29;
  ctx.fillText(`Name:[${res.name}]`, 880, 1210);
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#ff0000";
  ctx.textAlign = "start";
  fontSize = 29;
  ctx.fillText(`Gender:[${gender}]`, 850, 1400);
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#11ff00";
  ctx.textAlign = "start";
  ctx.fillText(`Followers:[${res.follow}]`, 1780, 950);
  //ctx.fillText(`»${love}`, 115, 200);
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#ff8000";
  ctx.textAlign = "start";
  ctx.fillText(`Birthday:[${birthday}]`, 1000, 680);
  //ctx.fillText(`»${location}`, 111, 360);
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#f6ff00";
  ctx.textAlign = "start";
  fontSize = 29;
  ctx.fillText(`UID:[${uid}]`, 170, 1000);
  ctx.font = `${fontsLink}px Play-Bold`;
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "start";
  fontSize = 20;  
  ctx.fillText(`Facebook URL:[${res.link}]`, 145, 1760);
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