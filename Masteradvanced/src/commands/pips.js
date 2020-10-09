exports.run = async(client ,message, args) => {
const {RichEmbed , Discord} = require("discord.js")

var embed = new RichEmbed()
.setColor("7289DA")
.setDescription('**What are PIPS?**\nPIPs are fruitlab rewards. PIPs are created when videos are watched and are distributed in a range of ways. The number of PIPs that a user has earned is shown in their account.\n\n**How do I earn PIPS?**')
.setImage(`https://cdn.glitch.com/4d8d527a-2190-42c3-b511-e296d7b17aa2%2FHow%20to%20earn%20pips%20new2.jpg?v=1602178401776`)
.setThumbnail("https://cdn.glitch.com/4d8d527a-2190-42c3-b511-e296d7b17aa2%2Ff249d33aec87d8fa0f0cb5764cb21a1c.png?v=1602178131449")
.setTimestamp()
message.channel.send(embed)
	}


exports.config = {
    command: 'pips',
    aliases: ['howtoearnpips'],
    plevel: "User",
    description: "What are pips? and how do i earn them?",
    usage: "$pips",
    category: "Support"
};

exports.extra = {
    hidden: false
};
