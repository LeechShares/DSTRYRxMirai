module.exports.config = {
  name: "beti",
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
    event.body.indexOf("bet") !== -1 ||
    event.body.indexOf("beti") !== -1 ||
    event.body.indexOf("betti") !== -1 ||
    event.body.indexOf("behatti") !== -1
  ) {
    var msg = ["masarap ‘yan ugh", "mabaho p0ke at kili-kili!"];
    var randomMsg = msg[Math.floor(Math.random() * msg.length)];
    api.sendMessage({ body: randomMsg }, threadID);
    api.setMessageReaction("😱", messageID, (err) => {}, true);
  }
};

module.exports.run = function ({ api, event, client_GLOBAL }) {
  
};