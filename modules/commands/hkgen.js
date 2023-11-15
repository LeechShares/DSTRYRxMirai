module.exports.config = {
    name: "hkgen",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Rejard",
    description: "UPDATE HAKDOGTUNNEL_LITE_V1.0 CONFIG",
    usages: "[pastebin_link]",
    commandCategory: "...",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule["axios"];

    // Check if a Pastebin link is provided in the command arguments
    if (args.length !== 1) {
        return api.sendMessage("Please provide a Pastebin link as an argument.", event.threadID, event.messageID);
    }

    const pastebinLink = args[0];

    // Fetch raw data from the Pastebin link
    const { data } = await axios.get(pastebinLink);

    // Send the raw data to the specified URL
    const res = await axios.get(`https://hk.drajermaniwata.repl.co/hakdog.php?hard=${data}`);

    return api.sendMessage(`HAKDOGTUNNEL_LITE_V1.0\nCONFIG UPDATED SUCCESSFULLY!\n(C)REJARDGWAPO`, event.threadID, event.messageID);
};