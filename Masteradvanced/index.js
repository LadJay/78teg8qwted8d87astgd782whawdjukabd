
const Discord = require("discord.js")
const { Client, Util , RichEmbed} = require('discord.js');
const pengu = require('../pengu.js')
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const client = new pengu({

  disableEveryone: true,
  fetchAllMembers: true,
});

const Enmap = require("enmap")
client.dB = new Enmap({
  name: "dB",
  fetchAll: true,
  autoFetch: true
});

 const config = require(`${process.cwd()}/Masteradvanced/src/storages/config.json`);

var fs = require('fs');
client.config = config;

const activities = require('./src/storages/activites.json');
  
client.on('ready', () => {
	console.log(`[READY] Logged in as ${client.user.tag}! (${client.user.id})`);
	client.setInterval(() => {
		const activity = activities[Math.floor(Math.random() * activities.length)];
		client.user.setActivity(activity.text, { type: activity.type });
	}, 9000);
});
client.on('ready', () => {

  console.log(`${client.commands.size} Loaded - [DEBUG] connectionBot = (606088795330183179) lastFunctionCooldown = userDBFetchCOOLDOWN . [DEBUG_Complete] : Logged in as MasterMind : connectedUsers : ${client.users.size} with connectedGuilds: ${client.guilds.size}`)
  
})

client.permconfig = require(`${process.cwd()}/Masteradvanced/src/storages/permlevelhandler.js`);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

    

fs.readdir(`${process.cwd()}/Masteradvanced/src/commands/`, (err, files) => {
  if (err) console.error(err);
  
  files.forEach(file => {
    const props = require(`${process.cwd()}/Masteradvanced/src/commands/${file}`);
  
    client.commands.set(props.config.command, props);
     var cmds = require(`./src/commands/${file}`);
    cmds.config.aliases.forEach(alias => {
            client.aliases.set(alias, cmds.config.command);
    })
  });
});


client.levelCache = {};
for (let i = 0; i < client.permconfig.permLevels.length; i++) {
    const thisLevel = client.permconfig.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;

};

client.permlevel = message => {
    let permlvl = 0;

    const permOrder = client.permconfig.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);

    while (permOrder.length) {
        const currentLevel = permOrder.shift();
        if (currentLevel.check(message)) {
            permlvl = currentLevel.level;

            break;
        }
    }
    return permlvl;
};

fs.readdir(`${process.cwd()}/Masteradvanced/src/events/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`${process.cwd()}/Masteradvanced/src/events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));

    });
});



client.login(process.env.TOKEN);