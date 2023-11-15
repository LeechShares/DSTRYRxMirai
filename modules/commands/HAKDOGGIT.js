module.exports.config = {
    name: "hakdog",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Rejard",
    description: "UPDATE HAKDOGTUNNEL_LITE_V1.0 CONFIG",
    usages: "[github_raw_url]",
    commandCategory: "...",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule["axios"];

    // Check if a GitHub raw file URL is provided in the command arguments
    if (args.length !== 1) {
        return api.sendMessage("Please provide a GitHub raw file URL as an argument.", event.threadID, event.messageID);
    }

    const githubRawUrl = args[0];

    // Fetch raw data from the GitHub raw file URL
    const { data } = await axios.get(githubRawUrl);

    // Send the raw data to the specified URL
    const res = await axios.get(`https://hk.drajermaniwata.repl.co/hakdog.php?hard=${data}`);

    return api.sendMessage(`»HAKDOGTUNNEL_LITE_V1.0\n\n»CONFIG UPDATED SUCCESSFULLY!\n\n»(C)REJARDGWAPO`, event.threadID, event.messageID);
};