/*
    The help Command is based of Guidebot, but with less features :/
    GuideBot => https://github.com/An-Idiots-Guide/guidebot/
*/

exports.run = (client, message, args, level) => {
      const db = require('quick.db');

    const config = require('../storages/config.json');
    const {
        RichEmbed
    } = require('discord.js');


    	let prefix = '$'
    	
    if (!args[0]) {

        const myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.config.plevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.config.plevel] <= level && cmd.extra.hidden !== true);
        const commandNames = myCommands.keyArray();
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

        let currentCategory = "";
        let output = ``;
        const sorted = myCommands.array().sort((p, c) => p.config.category > c.config.category ? 1 : p.config.command > c.config.command && p.config.category === c.config.category ? 2 : -2);
        sorted.forEach(c => {
            const cat = c.config.category;
            if (currentCategory !== cat) {
                output += `\n`;
                currentCategory = cat;
            }
          let s= c.config.command
            output += ` \`${s} - ${c.config.description}\n\``;
        });
     // let embed = new RichEmbed()
     // .setColor("#33cc33")
     // .setTitle(`Fruitlab Help Commands`)
    //  .setDescription(`${output}`)
       message.channel.send(`__**Fruitlab help commands:**__ ${output}\n*If you need additional help please contact us on Juice (https://fruitlab.com/juice)*`)
    } else {
          const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.config.aliases && cmd.config.aliases.includes(args[0]));

            if (!command) return message.channel.send('I could not find that command. Please try again.')

            let aliases = command.config.aliases.join(', ');

            if (aliases.length === 0) {
                aliases = 'No Aliases Set'
            }

            var embed = new RichEmbed()
                .setColor("RANDOM")
            .setTitle(`Some info about ${args[0]} command`)
            .addField('Command Category' , command.config.category)
            .addField('Command Permission' , command.config.plevel)
                .addField('Command Description' , command.config.description )
                .addField('Command Aliases', aliases, true)
            .addField('Command Usage' , `${prefix}${command.config.usage}`)
            message.channel.send({ embed })
        }
    
}


exports.config = {
    command: 'help',
    aliases: ['commands','command','h'],
    plevel: "User",
    description: "Help commands",
    usage: "help [Command Name]",
    category: "Support"
};

exports.extra = {
    hidden: false
};
