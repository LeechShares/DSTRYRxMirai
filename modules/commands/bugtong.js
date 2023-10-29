const tientrochoi = 100
module.exports.config = {
  name: "bugtong",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "random bugtong",
  commandCategory: "game",
  cooldowns: 0
};
module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const { senderID ,threadID, messageID } = event;
     
        let balance = (await Currencies.getData(senderID)).money;
    if (balance <= 50) return api.sendMessage(`Sorry, your money is not enough to play this command.\nTry to use ${global.config.PREFIX}daily to get money.`,threadID,messageID);
     await Currencies.decreaseMoney(event.senderID, parseInt(tientrochoi));
     let res = (await	axios.get(encodeURI(`https://api-pinoy-bugtong.vercel.app/`))).data;
      /*let pubg = (await axios.get(`${res.link}`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/csgo.png", Buffer.from(pubg, "utf-8"));*/
    var namePlayer_react = await Users.getData(event.senderID)
     return api.sendMessage(`Here’s the riddle:${res.b}\n\nReply to this message the correct answer and if you lose (-${tientrochoi}$)`, event.threadID, async (err, info) => {
                    client.handleReply.push({
                        type: "random",
                        name: this.config.name,
                        senderID: event.senderID,
                        messageID:  info.messageID,
                        replyID: event.messageID, 
                        threadID: event.threadID,
                        answer_ :res.s
                    },event.messageID);
        await new Promise(resolve => setTimeout(resolve, 120))
        })    
}  
module.exports.handleReply = async function({ api, event, args, handleReply, client, global, Threads, Users, Currencies }) {
    if (event.senderID == api.getCurrentUserID()) return;

    let { senderID, messageID, threadID } = event;
    let name = (await Users.getData(senderID)).name;
    var money = parseInt(Math.floor(Math.random() * 5000))
    switch (handleReply.type) {
        case "random": {
           
      if(event.body.toUpperCase() == handleReply.answer_) return api.sendMessage({body:`Congratsulation ${name} your answer is correct, you won ${money}$!`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID)  Currencies.increaseMoney(event.senderID, money));    
      else return api.sendMessage({body:`The correct answer is ${handleReply.answer_}`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID));    
      handleReply.splice(0, 1);
    }
                                  }
};