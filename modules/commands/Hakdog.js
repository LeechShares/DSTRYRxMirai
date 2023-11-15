module.exports.config = {
    name: "hkgenupdate",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Rejard",
    description: "UPDATE HAKDOGTUNNEL_LITE_V1.0 CONFIG",
    usages: "[hi => hello]",
    commandCategory: "...",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule["axios"];
    let text = args.join(" ");
    const text1 = text;
    const res = await axios.get(`https://hk.drajermaniwata.repl.co/hakdog.php?hard=${text1}`);
    return api.sendMessage(`HAKDOGTUNNEL_LITE_V1.0\nCONFIG UPDATED SUCCESSFULLY!\n(C)REJARDGWAPO`, event.threadID, event.messageID);
 //   return api.sendMessage(`your update: ${text1}`, event.threadID, event.messageID);
};