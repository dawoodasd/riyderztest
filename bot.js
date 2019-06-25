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
 
 
 
 
 
 
client.on('message', message => { //Toxic Codes
    if(message.channel.type === 'dm') {//Toxic Codes
        var guildID = '576042584921735169'; // <=============== ايدي السيرفر حقك//Toxic Codes
        if(message.content.includes('discord.gg/')) {//Toxic Codes
            var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);//Toxic Codes
            member.ban({ reason: 'ADS In Private.' }).catch();//Toxic Codes
        }//Toxic Codes
    }//Toxic Codes
});//Toxic Codes
 
 
 
 client.login(process.env.BOT_TOKEN);
