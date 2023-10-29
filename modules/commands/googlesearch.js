module.exports.config = {
	name: "googlesearch",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "search",
  usages: "[text]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const google = require('googlethis');
let juswa = args.join(" ");
const options = {
  page: 0, 
  safe: false,
  additional_params: { 
    // add additional parameters here, see https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters and https://www.seoquake.com/blog/google-search-param/
    hl: 'en' 
  }
}
const response = await google.search(`${juswa}`, options);
var title = res.results.title[0];
var title1 = res.results.title[1];
return api.sendMessage(`${title}\n${title1}`, event.threadID, event.messageID);
}