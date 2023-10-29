const axios = require('axios');

module.exports.config = {
  name: "dyk",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Blue",
  description: "Random 'Do You Know' facts in Tagalog",
  usePrefix: "false",
  commandCategory: "ewan",
  usages: "dyk",
  cooldowns: 10,
};

async function sendDYK(api, threadID) {
  try {
    const response = await axios.get('api');
    const fact = response.data.fact;

    api.sendMessage(`Alam moba? siyempre hindi kaya alam moba na \n\n

 ${fact} \n\n

Oh!? ayan alam mona sana na lamanan na utak mo`, threadID);
  } catch (error) {
    console.error('Something went wrong:', error);
    api.sendMessage('An error occurred while fetching from the API. Please try again.', threadID);
  }
}

module.exports.run = async function({ api, event }) {
  sendDYK(api, event.threadID);

  setInterval(() => {
    sendDYK(api, event.threadID);
  }, 1800000); // 30 minutes (30 min * 60 seconds * 1000 milliseconds)
}