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
 
 
 
 
 
 
const safety = JSON.parse(fs.readFileSync('./nomore.json', 'utf8')); //Toixc Codes
client.on("message", message =>{//Toixc Codes
if(!safety[message.author.id]) {//Toixc Codes
safety[message.author.id] = {//Toixc Codes
actions: 0
}}//Toixc Codes
})//Toixc Codes
// سوي ملف باسم safety.json
//Toixc Codes
client.on('guildMemberRemove', Toxic => {
Toxic.guild.fetchAuditLogs().then( ac => {//Toixc Codes //Toixc Codes
var anti = ac.entries.first();//Toixc Codes
if(anti.action == "MEMBER_KICK") {//Toixc Codes
if(!safety[anti.executor.id]) {//Toixc Codes //Toixc Codes
safety[anti.executor.id] = {//Toixc Codes
actions: 0//Toixc Codes //Toixc Codes
};
} else { //Toixc Codes
safety[anti.executor.id].actions+=1//Toixc Codes
if (safety[anti.executor.id].actions == 5) {//Toixc Codes
Toxic.guild.members.get(anti.executor.id).ban("Griefing")//Toixc Codes
console.log("banned griefer 1")//Toixc Codes
safety[anti.executor.id].actions = 0//Toixc Codes
}//Toixc Codes
}//Toixc Codes
    }//Toixc Codes
    });//Toixc Codes
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{//Toixc Codes
        if (err) console.log(err.message);//Toixc Codes
    });//Toixc Codes
});//Toixc Codes
 
 
 
 
 
client.on('roleDelete', Toxic => {//Toixc Codes
Toxic.guild.fetchAuditLogs().then( ac => {//Toixc Codes
var anti = ac.entries.first();
if(anti.action == "ROLE_DELETE") {//Toixc Codes
if(!safety[anti.executor.id]) {//Toixc Codes
safety[anti.executor.id] = {//Toixc Codes
actions: 0//Toixc Codes
};
} else { //Toixc Codes
safety[anti.executor.id].actions+=1//Toixc Codes
if (safety[anti.executor.id].actions == 3) {//Toixc Codes
Toxic.guild.members.get(anti.executor.id).ban("Griefing")//Toixc Codes
console.log("banned griefer 1")//Toixc Codes
safety[anti.executor.id].actions = 0//Toixc Codes
}//Toixc Codes
}
    }//Toixc Codes
    });//Toixc Codes
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{//Toixc Codes
        if (err) console.log(err.message);
    });//Toixc Codes
});
 
 
 
 
client.on('channelDelete', Toxic => {//Toixc Codes
Toxic.guild.fetchAuditLogs().then( ac => {//Toixc Codes
var anti = ac.entries.first();//Toixc Codes
if(anti.action == "CHANNEL_DELETE") {
if(!safety[anti.executor.id]) {
safety[anti.executor.id] = {//Toixc Codes
actions: 0
};//Toixc Codes
} else {
safety[anti.executor.id].actions+=1//Toixc Codes
if (safety[anti.executor.id].actions == 1) {//Toixc Codes
Toxic.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
safety[anti.executor.id].actions = 0//Toixc Codes
}
}
    }
    });//Toixc Codes
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{
        if (err) console.log(err.message);//Toixc Codes
    });//Toixc Codes
});//Toixc Codes
 
 
client.on('roleCreate', Toxic => {//Toixc Codes
Toxic.guild.fetchAuditLogs().then( ac => {//Toixc Codes
var anti = ac.entries.first();//Toixc Codes
if(anti.action == "ROLE_CREATE") {//Toixc Codes
if(!safety[anti.executor.id]) {//Toixc Codes
safety[anti.executor.id] = {//Toixc Codes
actions: 0//Toixc Codes
};//Toixc Codes
} else { //Toixc Codes
safety[anti.executor.id].actions+=1//Toixc Codes
if (safety[anti.executor.id].actions == 4) {//Toixc Codes
Toxic.guild.members.get(anti.executor.id).ban("Griefing")//Toixc Codes
console.log("banned griefer 1")//Toixc Codes
safety[anti.executor.id].actions = 0
}//Toixc Codes
}//Toixc Codes
    }//Toixc Codes
    });//Toixc Codes
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{//Toixc Codes
        if (err) console.log(err.message);//Toixc Codes
    });//Toixc Codes
});
 
 
 
 
client.on('channelCreate', Toxic => {
Toxic.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "CHANNEL_CREATE") {
if(!safety[anti.executor.id]) {
safety[anti.executor.id] = {
actions: 0
};
} else {
safety[anti.executor.id].actions+=1
if (safety[anti.executor.id].actions == 3) {
Toxic.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
safety[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{
        if (err) console.log(err.message);
    });
});
 
 
client.on('guildBanAdd', function(Toxic){
Toxic.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "MEMBER_BAN_ADD") {
if(!safety[anti.executor.id]) {
safety[anti.executor.id] = {
actions: 0
};
} else {
safety[anti.executor.id].actions+=1
if (safety[anti.executor.id].actions == 3) {
Toxic.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
safety[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{
        if (err) console.log(err.message);
    });
});
 
 
 
 
 
 client.login(process.env.BOT_TOKEN);
