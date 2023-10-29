module.exports.config = {
  name: "yato",
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
    event.body.indexOf("yato") !== -1 ||
    event.body.indexOf("yat") !== -1 ||
    event.body.indexOf("yatie") !== -1 ||
    event.body.indexOf("Yatoo") !== -1
  ) {
    var msg = ["pogi ‘yan", "pogi‚ gwapo‚ handsome‚ igop‚ ugh daddy"];
    var randomMsg = msg[Math.floor(Math.random() * msg.length)];
    api.sendMessage({ body: randomMsg }, threadID);
    api.setMessageReaction("❤", messageID, (err) => {}, true);
  }
};

module.exports.run = function ({ api, event, client_GLOBAL }) {
  
};