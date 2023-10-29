module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "deku",
    description: "imgur upload",
    commandCategory: "imgur",
    usages: "[reply to image]",
    cooldowns: 5
};
 
module.exports.run = async ({ api, event }) => {
const axios = require('axios');
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if(!linkanh) return api.sendMessage('Please reply to image.', event.threadID, event.messageID)
const res = await axios.get(`https://api.reikomods.repl.co/others/imgur?link=${encodeURIComponent(linkanh)}`);    
var juswa = res.data.uploaded.image;
    return api.sendMessage(`${juswa}`, event.threadID, event.messageID);
 
}