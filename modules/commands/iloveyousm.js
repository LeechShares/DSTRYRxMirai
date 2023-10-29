module.exports.config = {
  name: "iloveyousm",
  version: "",
  hasPermission: "0",
  credits: "ninya",
  description: "no prefix",
  commandCategory: "no need to use prefix",
  cooldowns: 5,
};

module.exports.handleEvent = function ({ api, event, client_Global }) {
  var { threadID, messageID } = event;
  if (
    event.body.indexOf("ilysm") !== -1 ||
    event.body.indexOf("ily") !== -1 ||
    event.body.indexOf("iloveyou") !== -1 ||
    event.body.indexOf("iloveyousomuch") !== -1
  ) {
    var msg = ["baliw ka ayoko makipag ilyhan", "iwwwnesss"];
    var randomMsg = msg[Math.floor(Math.random() * msg.length)];
    api.sendMessage({ body: randomMsg }, threadID);
    api.setMessageReaction("🤢", messageID, (err) => {}, true);
  }
};

module.exports.run = function ({ api, event, client_GLOBAL }) {
  
};