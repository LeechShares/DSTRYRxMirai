module.exports.config = {
	name: "tiktok",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Sam",
	description: "Tải video tiktok",
	commandCategory: "Mạng xã hội",
	usages: "",
	cooldowns: 5
}
  
module.exports.run = async function({ args, event,	api }) {
  const axios = require("axios"), fs = require("fs-extra")
  if (!args[0] || !args[1]) return api.sendMessage("Thiếu input", event.threadID);
  const tiktok = require("tiktok-down");
  const res = await tiktok(args[1]);
  const video = __dirname + "/cache/tiktok.mp4"
  const audio = __dirname + "/cache/tiktok.mp3"
  switch (args[0]) {
    case "video": {
      const down = (await axios.get(res.UrlVideo, {
        responseType: "arraybuffer"
      })).data;
      fs.writeFileSync(video, Buffer.from(down, "utf-8"))
      return api.sendMessage({body: `Author: ${res.author}\nTitle: ${res.title}`, attachment: fs.createReadStream(video)}, event.threadID)
    }
      break
    case "audio": {
      const down = (await axios.get(res.UrlAudio, {
        responseType: "arraybuffer"
      })).data;
      fs.writeFileSync(audio, Buffer.from(down, "utf-8"))
      return api.sendMessage({body: `Author: ${res.author}\nTitle: ${res.title}`, attachment: fs.createReadStream(audio)}, event.threadID)
    }
      break
    default: return api.sendMessage("Ngu", event.threadID)
  }
        }