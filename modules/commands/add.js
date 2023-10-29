module.exports.config = {
    name: "add",
    version: "1.0.2",
    credits: "Joshua Sy",
    hasPermssion: 0,
    description: "add user",
    commandCategory: "System",
    usages: "url",
    cooldowns: 0,
    dependencies: {
      "fb-tools":""
    },
};
module.exports.run = async function ({ api, event, clientL, args }) {
    var loz = require("fb-tools");
    var juswa = args.join(" ");
var juswa1 = await loz.findUid(juswa);
       api.addUserToGroup(juswa1, event.threadID)
}