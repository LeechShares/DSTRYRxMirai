module.exports.config={ 
name:"bot",
version:"1.0.0",
hasPermssion:2,
credits:"ManhG",
description:"repair/off bot",
commandCategory:"system",
usages:"[fix/off/on]",
cooldowns:5},
  module.exports.run=async({api:e,event:s,args:t})=>{switch(t[0]){case"fix":case"fixdup":return e.sendMessage("Repair fix dup done...",s.threadID,(()=>e.listenMqtt().stopListening()));case"stop":case"off":return e.sendMessage("Goodbye...\nHẹn gặp lại bạn sau nhé!",s.threadID,(()=>()=>process.exit(0)));case"start":case"on":return e.sendMessage("Successful start...\nBạn có thể dùng bot ngay bây giờ",s.threadID);default:return e.sendMessage("Syntax error, use : bot  [fixdup/stop/start]",s.threadID)}};