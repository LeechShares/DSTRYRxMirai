module.exports.config = {
  name: "mop",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "mop",
  commandCategory: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
return api.sendMessage(`example`, event.threadID, event.messageID);
}