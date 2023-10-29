 const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "cap",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Take a picture of the user's profile",
    commandCategory: "...",
    usages: "",
    cooldowns: 5
}
module.exports.handleEvent = async ({ api, event, Threads, args, Users }) => {
  try{
  if(event.body == "cap"){
    const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Wait a minute ${name}`, event.threadID, event.messageID);
    if (event.type == "message_reply") {
      var uid = event.messageReply.senderID;
    } else if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `sb=ug5nY-Lk7DpMSNXk30aT_UBg; vpd=v1%3B790x424x2.549999952316284; dpr=2.549999952316284; locale=vi_VN; datr=WmSBY_RkMDLF4CE5TBFoBFkE; c_user=100071882341745; xs=24%3A-WT6CSqUE8QGLA%3A2%3A1669428023%3A-1%3A8391; m_page_voice=100071882341745; fr=0uZB04biSZnPsWlmP.AWXmN-bzkk15O-hz31fvQKlNLck.BjgXAU.q7.AAA.0.0.BjhjXD.AWXu4CKnzQI; wd=980x1825; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1669777534471%2C%22v%22%3A1%7D; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBMaXZlKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA3LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20Live)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F107.0.0.0%20Mobile%20Safari%2F537.36; `,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `sb=ug5nY-Lk7DpMSNXk30aT_UBg; vpd=v1%3B790x424x2.549999952316284; dpr=2.549999952316284; locale=vi_VN; datr=WmSBY_RkMDLF4CE5TBFoBFkE; c_user=100071882341745; xs=24%3A-WT6CSqUE8QGLA%3A2%3A1669428023%3A-1%3A8391; m_page_voice=100071882341745; fr=0uZB04biSZnPsWlmP.AWXmN-bzkk15O-hz31fvQKlNLck.BjgXAU.q7.AAA.0.0.BjhjXD.AWXu4CKnzQI; wd=980x1825; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1669777534471%2C%22v%22%3A1%7D; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBMaXZlKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA3LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20Live)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F107.0.0.0%20Mobile%20Safari%2F537.36; `;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com?key=4de35f&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
  }
} catch(e){
    console.log(e)
}}
module.exports.run = async function ({ api,Users,event, args }) {
  const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Wait a minute ${name}`, event.threadID, event.messageID);
    var uid = String(args[0]);
    isNaN(uid) && (uid = Object.keys(event.mentions)[0], "message_reply" == event.type ? uid = event.messageReply.senderID : uid = event.senderID);
    var cookies = `sb=ug5nY-Lk7DpMSNXk30aT_UBg; vpd=v1%3B790x424x2.549999952316284; dpr=2.549999952316284; locale=vi_VN; datr=WmSBY_RkMDLF4CE5TBFoBFkE; c_user=100071882341745; xs=24%3A-WT6CSqUE8QGLA%3A2%3A1669428023%3A-1%3A8391; m_page_voice=100071882341745; fr=0uZB04biSZnPsWlmP.AWXmN-bzkk15O-hz31fvQKlNLck.BjgXAU.q7.AAA.0.0.BjhjXD.AWXu4CKnzQI; wd=980x1825; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1669777534471%2C%22v%22%3A1%7D; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBMaXZlKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA3LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20Live)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F107.0.0.0%20Mobile%20Safari%2F537.36; `,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `sb=ug5nY-Lk7DpMSNXk30aT_UBg; vpd=v1%3B790x424x2.549999952316284; dpr=2.549999952316284; locale=vi_VN; datr=WmSBY_RkMDLF4CE5TBFoBFkE; c_user=100071882341745; xs=24%3A-WT6CSqUE8QGLA%3A2%3A1669428023%3A-1%3A8391; m_page_voice=100071882341745; fr=0uZB04biSZnPsWlmP.AWXmN-bzkk15O-hz31fvQKlNLck.BjgXAU.q7.AAA.0.0.BjhjXD.AWXu4CKnzQI; wd=980x1825; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1669777534471%2C%22v%22%3A1%7D; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBMaXZlKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA3LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20Live)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F107.0.0.0%20Mobile%20Safari%2F537.36; `;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com?key=4de35f&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
}