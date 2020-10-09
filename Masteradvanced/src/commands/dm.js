exports.run = async(client ,message, args) => {
const {RichEmbed , Discord} = require("discord.js")

var embed = new RichEmbed()
.setColor("7289DA")
.setDescription(`How do I DM a User on [Juice](https://fruitlab.com/juice)?`)
.setImage(`https://cdn.glitch.com/4d8d527a-2190-42c3-b511-e296d7b17aa2%2FSendDM_NEW.jpg?v=1602178816393`)
.setTimestamp()
message.channel.send(embed)
	}


exports.config = {
    command: 'dm',
    aliases: ['howtodm'],
    plevel: "User",
    description: "How do i send a direct message to others on Juice?",
    usage: "$dm",
    category: "Support"
};

exports.extra = {
    hidden: false
};