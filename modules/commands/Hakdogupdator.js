module.exports.config = {
    name: "?hkgen2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Rejard",
    description: "HKONLINEUPDATOR ",
    usages: "[hi => hello]",
    commandCategory: "...",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule["axios"];
    const text = args.join(" ");

    const res = await axios.get(`https://hk.drajermaniwata.repl.co/hakdog.php?hard=${text1}`);

    // Assuming the response data contains the content
    const content = res.data;

    if (content) {
        // Send the content as a message
        return api.sendMessage(`Here is the content:\n${content}`, event.threadID, event.messageID);
    } else {
        // Handle an error if content retrieval failed
        return api.sendMessage("Sorry, there was an issue getting the content.", event.threadID, event.messageID);
    }
};