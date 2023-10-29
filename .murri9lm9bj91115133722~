module.exports.config = {
  name: "ytstalk",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "View youtuber info",
  commandCategory: "info",
  usages: "[text]",
  cooldowns: 5
};

module.exports.run = async (
{
  api,
  event,
  args
}) =>
{
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var juswa = args.join(" ");
  if (!juswa) return api.sendMessage(`Add text lmao`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://betabotz-api.herokuapp.com/api/stalk/yt?user=${encodeURIComponent(juswa)}&apikey=BetaBotz`).then(res =>
    {
      let name = res.data.result.name,
        vc = res.data.result.videoCount,
        sc = res.data.result.subCount
      var poster = res.data.result.thumbnail;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `Name: ${name}\n\nVideo Count: ${vc}\n\nSub Count: ${sc}`,
          attachment: fs.createReadStream(__dirname + `/cache/juswa.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/juswa.png`), event.messageID);
      };
      request(encodeURI(poster)).pipe(fs.createWriteStream(__dirname + `/cache/juswa.png`)).on("close", callback);
    })
  }
}