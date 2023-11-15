module.exports.config = {
  name: 'auto',
  version: '10.02',
  hasPermission: 0,
  credits: 'mood',
  description: 'Automatically send messages at scheduled times!',
  usePrefix: true,
  commandCategory: 'admin',
  usages: '[]',
  cooldowns: 3
};
const schedules = [{
  timer: '11:00:00 PM',
  message: ['rjrdgwapo']
},
{
  timer: '1:00:00 PM',
  message: ['ang initttttt ng earth', 'tara slep tayu']
},
{
  timer: '9:10:00 PM',
  message: ['THIS IS A TEST', 'Test', 'Test lang to']
},
 {
  timer: '9:10:21 PM',
  message: ['pssst', 'hoiii', 'musta d2]
},                  
{
  timer: '12:00:00 PM',
  message: ['supp', 'wassup']
},           
{
  timer: '11:00:00 AM',
  message: ['I Love you sa isa jan']
},               
{
  timer: '10:00:00 AM',
  message: ['Saing kana baby🥴 ']
},          
{
  timer: '5:00:00 PM',
  message: ['Musta ang araw nyo mga pars🤗']
}];
module.exports.onLoad = o => setInterval(() => {
  const getRandomMessage = messages => messages[Math.floor(Math.random()*messages.length)];
  if (schedule = schedules.find(schedule =>
      schedule.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim()
  )) global.data.allThreadID.forEach(threadID =>
      o.api.sendMessage(getRandomMessage(schedule.message), threadID)
  );
}, 1000);
module.exports.run = o => {};