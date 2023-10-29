module.exports.config = {
  name: "badong",
  version: "",
  hasPermission: "0",
  credits: "voss",
  description: "no prefix",
  commandCategory: "no need to use prefix",
  cooldowns: 5,
};

module.exports.handleEvent = function ({ api, event, client_Global }) {
  var { threadID, messageID } = event;
  if (
    event.body.indexOf("badong") !== -1 ||
    event.body.indexOf("dong") !== -1 ||
    event.body.indexOf("badn") !== -1 ||
    event.body.indexOf("dugong") !== -1
  ) {
    var msg = ["mukha kang tite!", "tite mong maliit bwahaha"];
    var randomMsg = msg[Math.floor(Math.random() * msg.length)];
    api.sendMessage({ body: randomMsg }, threadID);
    api.setMessageReaction("😘", messageID, (err) => {}, true);
  }
};

module.exports.run = function ({ api, event, client_GLOBAL }) {
  
};