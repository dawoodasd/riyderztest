const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('ready', function(){
console.log(`Logged in as ${client.user.tag}!`);    
   var large = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293']; // صور الكبيرة
 var small = ['483055660209012736','480169573530861578','483055655800930315'];  // صور الصغيرة
    setInterval(function (){  
    client.user.setPresence({
  status: 'dnd', 
 game: { 
    type: 1,
    name: 'new stream is come ',
     url: 'https://www.twitch.tv/n3k4a',
     state: `new stream code `,
    application_id: '532298006951624745',  
     assets: {
        small_text: ' n3k4a is one! ' ,
        large_text: `I'm n3k4a :)` },
    large_image:  `${large[Math.floor(Math.random() * large.length)]}`,
    small_image:   `${small[Math.floor(Math.random() * small.length)]}`,
    }
  
    });
    }, 5000);
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.login(process.env.BOT_TOKEN);
