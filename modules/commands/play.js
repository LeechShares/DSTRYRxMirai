module.exports.config = {
    name: "play",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Deku",
    description: "Play a music from youtube using bot",
    commandCategory: "youtube",
    usages: "[title]",
    cooldowns: 1
};
module.exports.run = async function ({ api, event, args }) {
const axios = require('axios');
const fs = require('fs-extra');
const ytdl = require('ytdl-core');
const youtubeSearchApi = require("youtube-search-api");
var path = `${__dirname}/cache/sing-${event.senderID}.mp3`;
const res = (await youtubeSearchApi.GetListByKeyword(args.join(" "), false, 1)).items;
const dekuu = await axioss.get(`https://api.reikomods.repl.co/sus/lyrics?lyrics=${args.join(" ")}`);
if (fs.statSync(path).size > 26214400) return api.sendMessage('File cannot be sent because it is larger than 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
for (list of res){
var yt = `https://www.youtube.com/watch?v=${list.id}`;
ytdl(yt).pipe(fs.createWriteStream(path));
  var lyrics = dekuu.data.lyrics;
}
return api.sendMessage({ 
         body: `${lyrics}`,
            attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
         event.messageID)
            
    }