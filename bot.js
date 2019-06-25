const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

 
 
client.on('ready', () => {
    console.log(`~~~~~~~~~~~~~~~~~`);
    console.log(`Logging into Discord`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`on  ${client.guilds.size} Servers `);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`#Riyderz TesT |!Help`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
 });
 
 
 

 
 
 client.login(process.env.BOT_TOKEN);
