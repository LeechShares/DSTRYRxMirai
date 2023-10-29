module.exports.config = {
    name: "speedtest",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Joshua Sy",
    description: "Test network speed",
    commandCategory: "system",
    cooldowns: 3,
    dependencies: {
		"fast-speedtest-api": ""
	}
};

module.exports.run = async function({ api, event }) {
	try {
		const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
		const juswa = await speedTest.getSpeed();
		return api.sendMessage(
			"➠Result" + 
			"\n⟿Speed: " + juswa + " MBPS",
			event.threadID, event.messageID
		);
	}
	catch {
		return api.sendMessage("Error", event.threadID, event.messageID);
	}
}
