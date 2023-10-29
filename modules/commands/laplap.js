module.exports.config = {
  name: "laplap",
  version: "",
  hasPermission: "0",
  credits: "vossing",
  description: "no prefix",
  commandCategory: "no need to use prefix",
  cooldowns: 5,
};

module.exports.handleEvent = function ({ api, event, client_Global }) {
  var { threadID, messageID } = event;
  if (
    event.body.indexOf("ugh") !== -1 ||
    event.body.indexOf("laplap") !== -1 ||
    event.body.indexOf("pakiss") !== -1 ||
    event.body.indexOf("kiss") !== -1
  ) {
    var msg = ["*/kissed your lips down to your neck; ahm iloveyou baby"];
    var randomMsg = msg[Math.floor(Math.random() * msg.length)];
    api.sendMessage({ body: randomMsg }, threadID);
    api.setMessageReaction("💀", messageID, (err) => {}, true);
  }
};

module.exports.run = function ({ api, event, client_GLOBAL }) {
  
};