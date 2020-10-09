exports.run = async(client ,message, args) => {
const {RichEmbed , Discord} = require("discord.js")
const db = require('quick.db')
const fs = require("fs");
let casenum = JSON.parse(fs.readFileSync("./case.json", "utf8"));
let cases = await db.fetch(`casess_${client.user.id}_${casenum[client.user.id].casenum}`)
  if(!casenum[client.user.id]) casenum[client.user.id] = {
    casenum: 0
  };
if(cases === 'null'){
  let cases = 1
}
  if(cases === '0'){
  let cases = 1
}
let game = args.slice(0).join(' ');
  if(!game) return message.channel.send('No args')
let embed = new RichEmbed()
.setColor('red')
.addField(`You have successfully added **${game}**,The staff will check this soon`,`<:Logo:613007057490280458> Your case number is #${casenum[client.user.id].casenum} your game will hopefully be added soon. We will notify you when its added! <:Logo:613007057490280458>`)
let embeds = new RichEmbed()
.setColor('red')
.addField('Case Number', `#${casenum[client.user.id].casenum}`,true)
.addField('Game Name',game,true)
.addField('Username', message.author.tag,true)
.setTimestamp()
client.channels.get('763895380193968158').send(embeds).then((msg) => {
console.log(msg.id)
    message.channel.send(embed)
db.add(`casess_${client.user.id}_${casenum[client.user.id].casenum}`, 1 )
db.set(`game_${client.user.id}_${casenum[client.user.id].casenum}` , `${game}`)
db.set(`user_${client.user.id}_${casenum[client.user.id].casenum}` , `${message.author.id}`)
db.set(`msgid_${client.user.id}_${casenum[client.user.id].casenum}`, msg.id)
   casenum[client.user.id].casenum++;
  fs.writeFile("./case.json", JSON.stringify(casenum), (err) => {
    if (err) console.log(err)
  });

  console.log(cases+1/1)
})
}
exports.config = {
    command: 'requestgame',
    aliases: ['rg'],
    plevel: "User",
    description: "Request a game to be added to the fruitlab video games list.",
    usage: "$requestgame <game>",
    category: "Requests"
};

exports.extra = {
    hidden: false
};
