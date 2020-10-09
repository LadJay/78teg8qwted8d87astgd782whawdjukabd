
  const talkedRecently = new Set();
  const talkedRecentlys = new Set();

exports.run = async(client, message) => {
  if (talkedRecently.has(message.author.id)) {
    } else {
 if(message.channel.type === "dm") {
       const db = require("quick.db")
       var active = await db.fetch(`userCooldown_${message.author.id}`)
     //  if(active) {
       //  return;
     //  }
   const { RichEmbed } = require("discord.js")
  // if(!active) {
                  talkedRecently.add(message.author.id);
   	if (message.author.bot) return;
        let embed = new RichEmbed()
      .setColor("#33cc33")
      .setTitle(`Contact Staff or Mods on Juice`)
      .setDescription(`<:Logo:613007057490280458> Please contact us on [Juice](https://fruitlab.com/juice). We will ensure that we will help you to the best of our abilities . <:Logo:613007057490280458>`)
        .setImage(`https://cdn.glitch.com/4d8d527a-2190-42c3-b511-e296d7b17aa2%2FScreenshot_95.png?v=1602177932762`)
        .setThumbnail("https://cdn.glitch.com/4d8d527a-2190-42c3-b511-e296d7b17aa2%2Ff249d33aec87d8fa0f0cb5764cb21a1c.png?v=1602178131449")
      .setTimestamp()
 message.author.send(embed)
   client.channels.get('763795134550114307').send(`${message.author.tag} has requested help through the fruitlabBOT(Have redirected to Juice).\n${message.author.username} said ${message.content}`)
     // }
    setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 60000);
 }
 }
const fs = require("fs")
  	const config = require('../storages/config.json');

        var prefix = '$';  
       
   
const { RichEmbed } = require("discord.js")
var blacklist = require('../storages/blacklist.json');
if (message.author.bot || message.author === client.user) return; // If the autor is a bot, or the channel is not in guild, or the author is the bot, return.

//message.channel.type !== "dm"  
  if(message.author.id === blacklist.blacklist) return;
   
    if (!message.content.startsWith(prefix)) return;

    

        if (message.content === `<@489545273106890762> prefix`) {
        message.channel.send(`This Server prefix is \`\n${prefix}\`\ `)
    }
     

  
    const args = message.content.split(' ').slice(1);
    const command = message.content.split(' ')[0].replace(prefix, '').toLowerCase();



    const level = client.permlevel(message);

    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))

    if (!cmd) return; 
     
    if (level < client.levelCache[cmd.config.plevel]) {
      var embed = new RichEmbed()
      .setTitle(`Required Permission: ${cmd.config.plevel} > ${client.permconfig.permLevels.find(l => l.level === level).name}`)
      .setColor('#000080')
      .setDescription(`Permission LVL : \`${level}\` \n Command Requires: \`Level ${client.levelCache[cmd.config.plevel]}\``)
      return message.channel.send(embed)
    }
    

    message.author.permLevel = level;

    message.flags = [];
    while (args[0] && args[0][0] === "-") {
        message.flags.push(args.shift().slice(1));
    }
    cmd.run(client, message, args, level);

                                    
}
                                           
