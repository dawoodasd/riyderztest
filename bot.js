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
 
 
 
 
 
 
client.on("message", async message => { // Mdax77x | Toxic Codes
    var TranslationQuestions =[
        {q:"**'car'**",a:"سيارة"},
        {q:"**'Home'**",a:"منزل"},
        {q:"**'Demon'**",a:"شيطان"},
        {q:"**'Box'**",a:"صندوق"},
        {q:"**'Phone'**",a:"هاتف"},
        {q:"**'Company'**",a:"شركة"},
        {q:"**'Race'**",a:"سباق"},
        {q:"**'challenge'**",a:"تحدي"},
        {q:"**'Apple'**",a:"تفاح"},
        {q:"**'Folder'**",a:"ملف"},
        {q:"**'Book'**",a:"كتاب"},
        {q:"**'Smile'**",a:"ابتسامة"},
        {q:"**'sad'**",a:"حزين"},
        {q:"**'Happy'**",a:"سعيد"},
        {q:"**'Clock'**",a:"ساعة"},
        {q:"**'Trap'**",a:"فخ"},
        {q:"**'Robot'**",a:"رجل آلي"},
        {q:"**'WebSite**",a:"موقع"},
        {q:"**'Animals'**",a:"حيوانات"},
        {q:"**'Speaker'**",a:"مكبر الصوت"},

    // Mdax77x | Toxic Codes

    ];
        if(message.content == prefix+"Trans"){ // Mdax77x | Toxic Codes
            if(UserBlocked.has(message.guild.id)) return message.channel.send("أنتظر قليلاً .")
            UserBlocked.add(message.guild.id)
            var TranslationQuestions = TranslationQuestions [Math.floor(Math.random() * TranslationQuestions .length)];
            let E4MdĄx7ź = new Discord.RichEmbed()
            .setTitle('Translation Game')// Mdax77x | Toxic Codes 
            .setAuthor(message.author.username, message.author.avatarURL)
            .setColor("RANDOM")
            .setDescription(TranslationQuestions.q)
            .setFooter("This Code Was Edited By : ✈ MdĄx7ź ♛ .#4836 "); /// Mdax77x | Toxic Codes
            message.channel.sendEmbed(E4MdĄx7ź).then(msg=> msg.delete(20000))
            const ToxicCodes = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
            UserBlocked.delete(message.guild.id)
            ToxicCodes.forEach(result => {
               if(result.author.id == client.user.id) return;
               if(result.content == "xTrans") return
               if(result.content == TranslationQuestions.a){
                 let E5MdĄx7ź = new Discord.RichEmbed()
                 .setTitle('=======(The Answer Is Correct)=======')
                 .addField(':white_check_mark: اجابة صحيحة',"==================")
                 .setColor("RANDOM")
                 .setFooter(`Requested By | ${message.author.tag}`) // Mdax77x | Toxic Codes

                 message.channel.sendEmbed(E5MdĄx7ź);                return;
               } else {
     
                                      var E6MdĄx7ź = new Discord.RichEmbed()
                    .setTitle('=====(Error404)=====')
                    .addField(':x:الإجابة خاطئة',"==============")
                    .setColor("RANDOM")
                    .setFooter(`Requested By | ${message.author.tag}`) // Mdax77x | Toxic Codes
                      message.channel.sendEmbed(E6MdĄx7ź);
               }
         });
      }
    });


 
 
 client.login(process.env.BOT_TOKEN);
