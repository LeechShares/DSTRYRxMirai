module.exports.config = {
    name: "relycs",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Who's Deku",
    description: "Search Lyrics",
    commandCategory: "...",
    usages: "[Name of the song]",
    cooldowns: 1,
};
const axios = require("axios")
const fs = require("fs");
module.exports.run = async function({ api, event, args }) {
const { threadID, messageID } = event;
let t = args.join(" ");
if (!t) return api.sendMessage("The name of the song is missing", threadID, messageID);
try {
    const r = await axios.get('https://lyrist.vercel.app/api/'+t);
const { image, lyrics, artist, title } = r.data;
    let ly = __dirname+"/cache/lyrics.png";
    let ly1 = (await axios.get(image, {
    responseType: "arraybuffer"
  })).data;
  fs.writeFileSync(ly, Buffer.from(ly1, "utf-8"));
    return api.sendMessage({body: `Lyrics of ${title} by ${artist}\n\n•——[ LYRICS ]——•\n\n${lyrics}\n\n•——[ LYRICS ]——•`, attachment: fs.createReadStream(ly)}, threadID, () => fs.unlinkSync(ly), messageID)
  } catch (e){
        console.log(e.message);
          return api.sendMessage("Can't find lyrics", threadID, messageID)
   }
  }