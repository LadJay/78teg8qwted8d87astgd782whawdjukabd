exports.run = async(client ,message, args) => {
const {RichEmbed , Discord} = require("discord.js")

var embed = new RichEmbed()
.setColor("7289DA")
.addField(`How do i change my name on fruitlab?`,`In order to change your name on fruitlab please DM a member of staff on [Juice](https://fruitlab.com/juice), A member of staff will have a green name and will have (Staff) on their name.`)
.setThumbnail("https://cdn.glitch.com/4d8d527a-2190-42c3-b511-e296d7b17aa2%2Ff249d33aec87d8fa0f0cb5764cb21a1c.png?v=1602178131449")
.setTimestamp()
message.channel.send(embed)
	}


exports.config = {
    command: 'namechange',
    aliases: ['nc'],
    plevel: "User",
    description: "How do i change my name on fruitlab?",
    usage: "$namechange",
    category: "Support"
};

exports.extra = {
    hidden: false
};
