module.exports.config = {
    name: "stalk",
    version: "1.0.0",
    hasPermision: 0,
    usages: "reply or mention",
    credit: "Joshua Sy",
    description: "get info",
    commandCategory: "random-img",
    cooldowns: 0,
};

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
         if (!args[0]) { var uid = senderID}
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
  if (args.join().indexOf('@') !== -1){ var uid = Object.keys(event.mentions) } 
	const res = await api.getUserInfoV2(uid); 
   var gender = res.gender == 'male' ? "Male" : res.gender == 'female' ? "Female" : "Not found";
    var birthday = res.birthday == 'Không Có Dữ Liệu' ? "Not found" : `${res.birthday}`;
    var love = res.relationship_status == 'Không Có Dữ Liệu' ? "Not found" : `${res.relationship_status}`;
    var location = res.location.name == 'Không Có Dữ Liệu' ? "Not Found" : `${res.location.name}`;
    var hometown = res.hometown == 'Không Có Dữ Liệu' ? "Not found" : "Not Found";
  var follow = res.follow == 'Không Có Dữ Liệu' ? "Not Found" : `${res.follow}`;

	let callback = function() {
            return api.sendMessage({
                body:`•——[INFORMATION]——•\n\nName: ${res.name}\nFacebook URL: ${res.link}\nBirthday: ${birthday}\nFollowers: ${follow}\nGender: ${gender}\nUID: ${uid}\nLocation: ${location}\nHometown: ${hometown}\n\n•——[INFORMATION]——•`,
                attachment: fs.createReadStream(__dirname + `/cache/image.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), event.messageID);
        };
		return request(encodeURI(res.avatar)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
		} catch (err) {
        console.log(err)
        return api.sendMessage(`Error`, event.threadID)
    }
}