var cred = "Deku";
module.exports.config = {
    name: "ad",
    version: "1.0.0",
    hasPermision: 0,
    credits: `${cred}`,
    description: "Get information of admin bot and bot",
    commandCategory: "info",
    cooldowns: 0,
};

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
      if ((this.config.credits) != `${cred}`) { return api.sendMessage(`ulol change credits pa `, event.threadID, event.messageID)}
      const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const res = await api.getUserInfoV2(global.config.OWNER);
const res1 = await api.getUserInfoV2(global.config.BOT); 
   var gender = res.gender == 'male' ? "Male" : res.gender == 'female' ? "Female" : "Not found";
    var birthday = res.birthday == 'Không Có Dữ Liệu' ? "Not found" : res.birthday;
    var love = res.relationship_status == 'Không Có Dữ Liệu' ? "Not found" : res.relationship_status;
    var location = res.location == 'Không Có Dữ Liệu' ? "Not Found" : res.location.name;
    var hometown = res.hometown == 'Không Có Dữ Liệu' ? "Not found" : res.hometown.name;
  var follow = res.follow == 'Không Có Dữ Liệu' ? "Not Found" : res.follow;
  var usern = res.username == 'Không Có Dữ Liệu' ? res.id : res.username;
      var rs = res.love == 'Không Có Dữ Liệu' ? "None" : res.love.name;

//--bot--//
var gender1 = res1.gender == 'male' ? "Male" : res1.gender == 'female' ? "Female" : "Not found";
    var birthday1 = res1.birthday == 'Không Có Dữ Liệu' ? "Not found" : res1.birthday;
    var love1 = res1.relationship_status == 'Không Có Dữ Liệu' ? "Not found" : res1.relationship_status;
    var location1 = res1.location == 'Không Có Dữ Liệu' ? "Not Found" : res.location1.name;
    var hometown1 = res1.hometown == 'Không Có Dữ Liệu' ? "Not found" : res1.hometown.name;
  var follow1 = res1.follow == 'Không Có Dữ Liệu' ? "Not Found" : res1.follow;
  var usern1 = res1.username == 'Không Có Dữ Liệu' ? res.id : res1.username;
      var rs1 = res1.love == 'Không Có Dữ Liệu' ? "None" : res1.love.name;
var prefix = global.config.PREFIX;
	let callback = function() {
            return api.sendMessage({body:`•——[ADMIN]——•\n\nBot Name: ${res.name}\nFacebook URL: https://facebook.com/${usern}\nUsername or ID: ${usern}\nBirthday: ${birthday}\nFollowers: ${follow}\nGender: ${gender}\nUID: ${res.id}\nLocation: ${location}\nHometown: ${hometown}\nRelationship Status: ${love}\nIn relationship with: ${rs}\n\n•——[BOT]——•\n\n${global.config.BOTNAME} is running: ${hours} hours ${minutes} minutes ${seconds} seconds.\nTotal Users: ${global.data.allUserID.length}\nTotal Groups: ${global.data.allThreadID.length}\nPrefix: ${prefix}\nName ${res1.name}\nFacebook URL: https://facebook.com/${usern1}\nUsername or ID: ${usern1}\nBirthday: ${birthday1}\nFollowers: ${follow1}\nGender: ${gender1}\nUID: ${res1.id}\nLocation: ${location1}\nHometown: ${hometown1}\nRelationship Status: ${love1}\nIn relationship with: ${rs1}\n\n•——[INFORMATION]——•`, attachment: fs.createReadStream(__dirname + `/cache/image.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), event.messageID);
        };
		return request(encodeURI(res.avatar)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
		} catch (err) {
        console.log(err)
        return api.sendMessage(`Error`, event.threadID)
    }
}