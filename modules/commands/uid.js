module.exports.config = {
  name: 'uid',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'Rickciel',
  usePrefix: false,
  description: 'Get UID and Name of mentioned users',
  commandCategory: 'utility',
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  if (Object.keys(event.mentions) === 0) {
    const uid = event.senderID;
    const name = (await api.getUserInfo(uid))[uid].name;

    const responseMessage = `Name: ${name}\nUID: ${uid}`;
    return api.sendMessage(responseMessage, event.threadID, event.messageID);
  } else {
    for (const mentionID in event.mentions) {
      const name = (await api.getUserInfo(mentionID))[mentionID].name;
      const response = `Name: ${name}\nUID: ${mentionID}`;
      api.sendMessage(response, event.threadID);
    }
  }
};