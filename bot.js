const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("607148874536058922")
setInterval(function() {
channel.send(`MeraDaqo is the Best ww MeraDaqo is the Best ww MeraDaqo is the Best ww`);
}, 30)
})

client.login(process.env.BOT_TOKEN);