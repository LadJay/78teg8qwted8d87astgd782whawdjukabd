exports.run = async(client ,message, args) => {
const {RichEmbed , Discord} = require("discord.js")
const db = require('quick.db')
const fs = require("fs");
let casenum = JSON.parse(fs.readFileSync("./case.json", "utf8"));


  if(!casenum[client.user.id]) casenum[client.user.id] = {
    casenum: 0
  };

let game = args.slice(0).join(' ');
  let arg0 = args[0]
let cases = await db.fetch(`casess_${client.user.id}_${arg0}`)
let name = await db.fetch(`user_${client.user.id}_${arg0}`)
let games = await db.fetch(`game_${client.user.id}_${arg0}`)
let weburl = await db.fetch(`game_${client.user.id}_${arg0}`)
let id = await db.fetch(`msgid_${client.user.id}_${arg0}`)

if(cases === null) {
  return message.channel.send(`This case does'nt exist.`)
}
  let user = await client.fetchUser(name)
var web = weburl; 
var noSpacesString= web.replace(/ /g,'');
  if(!game) return message.channel.send('Please supply a case number!')
let embed = new RichEmbed()
.setColor('#FFFF00')
.setDescription(`<:Logo:613007057490280458> Successfully approved Case #${arg0} ${user.tag}'s Game request (${games})! <:Logo:613007057490280458>`)
  message.channel.send(embed).then((msg) => {
    msg.delete(3000)
 db.delete(`casess_${client.user.id}_${arg0}`)
client.guilds.get('608317173516992543').channels.get('763895380193968158').fetchMessage(id).then(message => message.delete());
message.delete()
client.users.get(name).send(`${games} has successfully been added to the fruitlab games list! Check it out: https://fruitlab.com/watch/${noSpacesString.toLowerCase()} :tada:`)

  console.log(cases+1/1)
})
                                   }
                                     
exports.config = {
    command: 'approve',
    aliases: ['a'],
    plevel: "Staff",
    description: "Approve a user game request",
    usage: "$approve <caseNumber>",
    category: "Requests"
};

exports.extra = {
    hidden: false
};
