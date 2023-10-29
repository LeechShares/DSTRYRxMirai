module.exports.config = {
  name: "tikdown",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "tiktok",
  usages: "[link]",
  commandCategory: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    let juswa = args.join(" ");
    const res = await axios.get(`https://manhict.tech/api/tikDL?url=${juswa}&apikey=bKfbFLZX`);
    var data = res.data.result.play_video;
    var music = res.data.result.title_music;
    var desc = res.data.result.desc;
    var du = res.data.result.duration;
    var n = res.data.result.owner_nickname;
    let a = `${res.data.result.play_video}`;

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.mp4", Buffer.from(imgs1, "utf-8"));

    var josh = [];
    josh.push(fs.createReadStream(__dirname + "/cache/img1.mp4"));
    return api.sendMessage({body: `Description: ${desc}\nMusic: ${music}\nDuration: ${du}\nUser Nickname: ${n}`,attachment: josh
    }, event.threadID);
}