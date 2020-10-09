exports.run = async(client ,message, args) => {
const {RichEmbed , Discord} = require("discord.js")
const db = require('quick.db')
const fs = require("fs");
let casenum = JSON.parse(fs.readFileSync("./case.json", "utf8"));


  if(!casenum[client.user.id]) casenum[client.user.id] = {
    casenum: 0
  };

let game = args.slice(1).join(' ');
  let arg0 = args[0]
let cases = await db.fetch(`casess_${client.user.id}_${arg0}`)
let name = await db.fetch(`user_${client.user.id}_${arg0}`)
let games = await db.fetch(`game_${client.user.id}_${arg0}`)
let id = await db.fetch(`msgid_${client.user.id}_${arg0}`)

if(cases === null) {
  return message.channel.send(`This case does'nt exist.`)
}
  let user = await client.fetchUser(name)

  if(!arg0) return message.channel.send('Please supply a case number!')
  
let embed = new RichEmbed()
.setColor('#FFFF00')
.setDescription(`<:Logo:613007057490280458> Successfully disapproved Case #${arg0} ${user.tag}'s Game request (${games}) because '${game}'! <:Logo:613007057490280458>`)
  message.channel.send(embed).then((msg) => {
    msg.delete(3000)
 db.delete(`casess_${client.user.id}_${arg0}`)
client.guilds.get('763795134550114304').channels.get('763826735169929278').fetchMessage(id).then(message => message.delete());
message.delete()
client.users.get(name).send(`${games} has been declined because '${game}'`)

  console.log(cases+1/1)
})
                                   }
                                     
exports.config = {
    command: 'disapprove',
    aliases: ['d'],
    plevel: "Staff",
    description: "Dis approves a user game request",
    usage: "$disapprove <caseNumber>",
    category: "Requests"
};

exports.extra = {
    hidden: false
};
