const fetch = require("node-fetch");

const ACCESS_TOKENS = [
  "EAAD6V7os0gcBO3eucJGzKLfpftCar1KBIyMGal4jNQk2I0KAJ0W9a79h0CGP0oG6oXYT4ZBEUZB7ZCImWMiChtH8u5lfKAMNe9FUsznt0ht1XcwMXQFK0mpuOzLjZCJ9EpxvLNdkmVqZA2J1qhVohlZBZCTPAuOEZADuQKCTc1Eqk5K6KZC11KBy2DwoZBIgZDZD"
  // add more access tokens here
];

module.exports.config = {
  name: "share",
  version: "1.0.0",
  hasPermission: 2,
  credits: "Grey",
  description: "Automatically share in groups using mdl?",
  commandCategory: "admin",
  usage: "!share link count",
  cooldowns: 2,
  dependencies: { "node-fetch": "" },
};

module.exports.run = async function ({ api, event, args }) {
  if (!args[0] || !args[1]) {
    return api.sendMessage("Please provide a link and count.", event.threadID, event.messageID);
  }

  const link = args[0];
  const count = parseInt(args[1]);

  async function myTimer(token) {
    try {
      const res = await fetch(
        `https://graph.facebook.com/me/feed?method=post&access_token=${token}&link=${link}&privacy={"value":"SELF"}&published=0`,
        { method: "GET" }
      );
      const data = await res.json();
      console.log(`Shared post with ID: ${data.id}`);
    } catch (error) {
      console.log("an error occurred:", error.message);
    }
  }

  const tokenPromises = [];
  for (let i = 0; i < count; i++) {
    const randomToken = ACCESS_TOKENS[Math.floor(Math.random() * ACCESS_TOKENS.length)];
    tokenPromises.push(myTimer(randomToken));
  }

  await Promise.all(tokenPromises);
  console.log("Sharing process completed.");
};