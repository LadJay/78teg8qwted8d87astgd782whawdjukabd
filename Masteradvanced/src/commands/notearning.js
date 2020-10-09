exports.run = async(client ,message, args) => {
const {RichEmbed , Discord} = require("discord.js")

var embed = new RichEmbed()
.setColor("7289DA")
.addField(`Not earning PIPS from watching videos?`,`Instant pips are only available within the app, this is due to PIPs from watching being deposited into the community PIP Pot. Your share will be distributed based upon contribution towards it every Monday, based on level, ads watched, and player rank.`)
.setThumbnail("https://cdn.glitch.com/4d8d527a-2190-42c3-b511-e296d7b17aa2%2Ff249d33aec87d8fa0f0cb5764cb21a1c.png?v=1602178131449")
.setTimestamp()
message.channel.send(embed)
	}


exports.config = {
    command: 'nopips',
    aliases: ['notearning','nopips'],
    plevel: "User",
    description: "Why am i not earning pips from watching videos?",
    usage: "$nopips",
    category: "Support"
};

exports.extra = {
    hidden: false
};
