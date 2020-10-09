exports.run = async(client ,message, args) => {
const {RichEmbed , Discord} = require("discord.js")
console.log(message.guild.id)
var embed = new RichEmbed()
.setColor("7289DA")
.setDescription('**What does XP do?**\n\nThe XP determines what rank you are on fruitlab ([All ranks](https://fruitlab.com/how-to-level-up)). Every week you will get a % cut depending on your activity (determined by xp) on fruitlab from the community pip pot (distributed on monday). For additional information please read this [Grapevine article](https://fruitlab.com/news/xp-explained)\n\n**How do I earn XP?**')
.setImage(`https://cdn.glitch.com/4d8d527a-2190-42c3-b511-e296d7b17aa2%2FHow%20to%20earn%20XP_NEW2.jpg?v=1602179524778`)
.setThumbnail("https://cdn.glitch.com/4d8d527a-2190-42c3-b511-e296d7b17aa2%2Ff249d33aec87d8fa0f0cb5764cb21a1c.png?v=1602178131449")
.setTimestamp()
message.channel.send(embed)
	}


exports.config = {
    command: 'xp',
    aliases: ['howtoearnxp'],
    plevel: "User",
    description: "What does XP do? and How do i earn XP?",
    usage: "$xp",
    category: "Support"
};

exports.extra = {
    hidden: false
};
