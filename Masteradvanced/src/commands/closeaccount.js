exports.run = async(client ,message, args) => {
const {RichEmbed , Discord} = require("discord.js")

var embed = new RichEmbed()
.setColor("7289DA")
.addField("I'd like to close my fruitlab Account",`If you would like to leave the fruitlab community all you need to do is send us an email letting us know you would like to leave - and we can get it all sorted out for you. We will deactivate your account, remove any PIPS and delete any videos you’ve uploaded. We will not put a picture of you on the office dartboard and we will not ban your email and mobile from being able to re-register. Please [contact us](https://fruitlab.com/contactus) if you would like to leave the community. We will be sad to see you go!`)
.setThumbnail("https://cdn.glitch.com/4d8d527a-2190-42c3-b511-e296d7b17aa2%2Ff249d33aec87d8fa0f0cb5764cb21a1c.png?v=1602178131449")
.setTimestamp()
message.channel.send(embed)
	}


exports.config = {
    command: 'closeaccount',
    aliases: ['ca'],
    plevel: "User",
    description: "How do i close my fruitlab account?",
    usage: "$closeaccount",
    category: "Support"
};

exports.extra = {
    hidden: false
};
