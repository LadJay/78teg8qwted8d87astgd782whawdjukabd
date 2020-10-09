        
        function buy(client, message, args) {
            var user = message.mentions.users.first();
                const { Discord, RichEmbed } = require('discord.js')
              const fs = require("fs")
               const db = require("quick.db")
const config = require('../storages/config.json');
          
          let ban = ["-"]
  let f = false 
  for(var i in ban) {
    if(message.content.toLowerCase().includes(ban[i].toLowerCase())) f = true
  }
  if(f) {
return message.channel.send(`No -`)
  }
   const shortcode = (n) => {
    const possible = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz0123456789'
    let text = ''
    for (var i = 0; i < n + 1; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text;
      }
          const token = shortcode(25)

                                          var amount = args[1]
                                           var amount2 = parseInt(args[1])
                                           var lol = args[1]
       if(!amount2) {
         amount2 = 1
       }
          

          db.fetch(`premium?_${message.author.id}`).then(pre => {
            db.fetch(`cpms_${message.author.id}`).then(cpm => {

   db.fetch(`prefix10_${message.guild.id}`).then(c => {
        var prefix = c;
        
        if (!prefix) { // If c.text a.k.a prefix doesn't exist, prefix will be "!"
            prefix = config.prefix;
       
    }
  let warns = JSON.parse(fs.readFileSync("./register.json", "utf8"));
        if(!warns[message.author.id]) warns[message.author.id] = {
    warns: 0
  };
                    if( warns[message.author.id].warns == 0){
      var embed = new RichEmbed()
           .setColor('RANDOM')
           .setDescription(`You are not registered yet please register before using any economy commands!\nUsage: \`${prefix}register\`!`)
                  message.channel.send(embed)
                     .then(message => {
                message.delete(30000);
            })
        return;
    };    
	



                                   let userO = message.author
         
                                          let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"))
           
                                      
              let userUp = message.author
              if(!upgrade[userUp.id]) upgrade[userUp.id] = {
                upgrade: 0
              };
            
            
                   
            const items = JSON.parse(fs.readFileSync('Masteradvanced/items.json', 'utf8'));
            
       
                
                let msg = message.content.toUpperCase();
                let cont = message.content.slice(prefix.length).split(" "); // This slices off the prefix, then stores everything after that in an array split by spaces.
            
            
                    let categories = []; 
            
                    if (!args[0]) { 
            
                        for (var i in items) { 
            
                            if (!categories.includes(items[i].type)) {
                                categories.push(items[i].type)
                            }
            
                        }
            
                 
            db.fetch(`globalCredits_${message.author.id}`).then(pb => {
                console.log(pb);
                   const embed = new RichEmbed()
                            .setDescription(`MM Market ${pb.toLocaleString()} To spend in the shop! `)
                            .setColor("RANDOM")
            
                        for (var i = 0; i < categories.length; i++) { 
            
                            var tempDesc = '';
            
                            for (var c in items) { 
                                if (categories[i] === items[c].type) {
                                 
                  if(pre === 1) {
            items[c].price = items[c].price /2
          }
                                    tempDesc += `\`${items[c].name}\` -  ${items[c].price.toLocaleString()} ${items[c].cur} - *${items[c].desc}*\n`; // Remember that \n means newline
            
                                }
                            
                            }
            
                            embed.addField(categories[i], tempDesc);
            
                        }
            
                        return message.channel.send({
                            embed
                        }); 
            
            
                    })
            }
            
            
                    let itemName = '';
                    let itemPrice = 0;
                    let itemDesc = '';
            
              
                    for (var i in items) { 
                        if (args[0].toUpperCase() === items[i].name.toUpperCase()) { 
                            itemName = items[i].name;
                            itemPrice = items[i].price;
                            itemDesc = items[i].desc;
                        }
                    }
            
                    if (itemName === '') {
                        return message.channel.send(`Item was not found in the itemshop!`)
                    }
        if (itemName === 'bait') {

          if(pre === 1) {
            itemPrice = 2
          }
                                     let owner= JSON.parse(fs.readFileSync("./rod.json", "utf8"))

              let userO = message.author
                                                                                              const db = require("quick.db")
             db.fetch(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                  if (c <= itemPrice * amount2 -1) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }

                      db.subtract(`globalCredits_${message.author.id}`, parseInt(`${itemPrice * amount2}`)).then((c) => {
          
                      })
                
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
            
            
   db.add(`bait_${message.author.id}`, amount2 )
                 db.set(`${token}_${message.author.id}`, `${amount2} Bait Purchased for ${amount2 * itemPrice}`)

              fs.writeFile("./rod.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought ${amount2} fishing bait :tada: for __${itemPrice * amount2}__ **Coins**! \n TransactionID: **${token}** `)
                
  
    
                console.log(`(Fish Biait)${message.author.username} Bought ${amount2} for ${itemPrice * amount2} ${message.guild.id}`)

              })
              

                                                          })
            }
     
      if (itemName === 'cpm') {
     
            if(!args[1]) {
       args[1] = 1
     }
         if(args[1] === "max") {
      args[1] = 35-cpm
  }   
        if(args[1] === "MAX") {
      args[1] = 35-cpm
  }   
       if (isNaN(args[1])) {
      return message.channel.send("Only Numbers are allowed.");
    }
        if(cpm === 36) {
            return message.channel.send('You already have max cpm!')
  }
          if(cpm > 36 && cpm < 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
            return message.channel.send('You already have max cpm!')
          }
           const possible = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz0123456789'
 
        let a = cpm+args[1]
        if(a > 36 && a < 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        return message.channel.send(`Your value is very high !`)
           }
 
   
        if(pre === 1) {
            itemPrice = 2
          }
                                     let owner= JSON.parse(fs.readFileSync("./rod.json", "utf8"))

              let userO = message.author
                                                                                              const db = require("quick.db")
             db.fetch(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                  if (c <= itemPrice * args[1] -1) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }

                      db.subtract(`globalCredits_${message.author.id}`, parseInt(`${itemPrice * args[1]}`)).then((c) => {
          
                      })
                
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
            
            
   db.add(`cpms_${message.author.id}`, args[1] /1)
                 db.set(`${token}_${message.author.id}`, `${args[1]} CPM Purchased for ${amount2 * itemPrice}`)

              fs.writeFile("./rod.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought ${args[1]} CPM :tada: for __${itemPrice * args[1]}__ **Coins**!\nTransactionID: **${token}** `)
                
  
    
                console.log(`(Fish Biait)${message.author.username} Bought ${args[1]} for ${itemPrice * args[1]} ${message.guild.id}`)

              })
              

                                                          })
            }
      if (itemName === 'pickaxe') {
              let userO = message.author
   db.fetch(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                  if (c <= itemPrice * amount2) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }
          
                     db.fetch(`globalCredits_${message.author.id}`, parseInt(`-${itemPrice * amount2}`)).then((c) => {
          
                      })
                
              
            
                                

                message.channel.send(`You just bought ${amount2} pick(s) (Uncommon) for __$${itemPrice * amount2}__ :tada:\nTransactionID: **${token}**`)
                console.log(`(Car) | ${message.author.username} Bought ${amount2} for ${itemPrice * amount2}`)
       
 db.add(`pickd_${message.author.id}`, 20 * amount2)
                      db.set(`${token}_${message.author.id}`, `${amount2} **Pickaxes** Purchased for ${amount2 * itemPrice}`)

                                         db.add(`pickaxe_${message.author.id}`, 1)

              })
                                          

   
                          }
          if (itemName === 'tux') {
  
             if(pre === 1) {
            itemPrice = 200
          }
                                     let owner= JSON.parse(fs.readFileSync("./rod.json", "utf8"))

              let userO = message.author
                                                                                              const db = require("quick.db")
             db.fetch(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                  if (c <= itemPrice * amount2 -1) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }
          
                      db.subtract(`globalCredits_${message.author.id}`, parseInt(`${itemPrice * amount2}`)).then((c) => {
          
                      })
                
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
            
            
   db.add(`tux_${message.author.id}`, amount2 )
                                  db.set(`${token}_${message.author.id}`, `${amount2} **Tux** Purchased for ${amount2 * itemPrice}`)


              fs.writeFile("./rod.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought ${amount2} :man_in_tuxedo: tuxedo(s) :tada: for __${itemPrice * amount2}__ **Coins** \n your nice and fancy now!!\nTransactionID: **${token}** `)
                console.log(`(Fish Biait)${message.author.username} Bought ${amount2} for ${itemPrice * amount2}`)

              })
                                          

                                                          })
            }
     if (itemName === 'key') {
  
             if(pre === 1) {
            itemPrice = 175000
          }
       if(pre === 1) {
         return message.channel.send(`You have an active key!`)
       }
                                     let owner= JSON.parse(fs.readFileSync("./rod.json", "utf8"))

              let userO = message.author
                                                                                              const db = require("quick.db")
             db.fetch(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                  if (c <= itemPrice -1) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }
          
                      db.subtract(`globalCredits_${message.author.id}`, parseInt(`${itemPrice}`)).then((c) => {
          
                      })
                
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
            
            
   db.add(`premium?_${message.author.id}`, 1)
                                  db.set(`${token}_${message.author.id}`, `Premium Key Purchased for ${itemPrice}`)


              fs.writeFile("./rod.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought a key for __${itemPrice}__ **Coins** \n 365 DAYS YUPPPP!!  SHORTER CMD COOLDOWN!`)
                console.log(`(Fish Biait)${message.author.username} Bought ${amount2} for ${itemPrice }`)

              })
                                          

                                                          })
            }
      if (itemName === 'mansion') {
        

                                if(pre === 1) {
            itemPrice = 9999
          }      
        let owner= JSON.parse(fs.readFileSync("./rod.json", "utf8"))

              let userO = message.author
                                                                                              const db = require("quick.db")
             db.fetch(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                  if (c <= itemPrice * amount2 -1) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }
          
                      db.subtract(`globalCredits_${message.author.id}`, parseInt(`${itemPrice * amount2}`)).then((c) => {
          
                      })
                
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
            
            
   db.add(`mansion_${message.author.id}`, amount2 /1 )
                                  db.set(`${token}_${message.author.id}`, `${amount2} Mansion Purchased for ${amount2 * itemPrice}`)


              fs.writeFile("./rod.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought ${amount2} :house_with_garden: Mansion(s) :tada: for __${itemPrice * amount2}__ **Coins** \n MANSION LUCKY GOOOOOOOOOOD! \nTransactionID: **${token}**`)
                console.log(`(Fish Biait)${message.author.username} Bought ${amount2} for ${itemPrice * amount2}`)

              })
                                          

                                                          })
            }
      if (itemName === 'background') {
        

                                if(pre === 1) {
            itemPrice = 10000
          }      
        let owner= JSON.parse(fs.readFileSync("./rod.json", "utf8"))

              let userO = message.author
                                                                                              const db = require("quick.db")
             db.fetch(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                  if (c <= itemPrice * amount2 -1) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }
          
                      db.subtract(`globalCredits_${message.author.id}`, parseInt(`${itemPrice * amount2}`)).then((c) => {
          
                      })
                
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
            
            
   db.add(`bg1_${message.author.id}`, amount2  /1)
                                  db.set(`${token}_${message.author.id}`, `${amount2} Backgrounds Purchased for ${amount2 * itemPrice}`)


              fs.writeFile("./rod.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought ${amount2} Background Change(s) :tada: for __${itemPrice * amount2}__ **Coins**\nTransactionID: **${token}**`)
                console.log(`(Fish Biait)${message.author.username} Bought ${amount2} for ${itemPrice * amount2}`)

              })
                                          

                                                          })
            }
     if (itemName === 'rankcolor') {
        

                                if(pre === 1) {
            itemPrice = 5000
          }      
        let owner= JSON.parse(fs.readFileSync("./rod.json", "utf8"))

              let userO = message.author
                                                                                              const db = require("quick.db")
             db.fetch(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                  if (c <= itemPrice * amount2 -1) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }
          
                      db.subtract(`globalCredits_${message.author.id}`, parseInt(`${itemPrice * amount2}`)).then((c) => {
          
                      })
                
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
            
            
   db.add(`rankColor_${message.author.id}`, amount2 )
                                  db.set(`${token}_${message.author.id}`, `${amount2} RankCardBar Color Purchased for ${amount2 * itemPrice}`)


              fs.writeFile("./rod.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought ${amount2} Rank Color Change(s) :tada: for __${itemPrice * amount2}__ **Coins**\nTransactionID: **${token}** `)
                console.log(`(Fish Biait)${message.author.username} Bought ${amount2} for ${itemPrice * amount2}`)

              })
                                          

                                                          })
            }
    
          if (itemName === 'rep') {
        
 db.fetch(`rx2_${user.id}`).then(rx2 => {
if(!rx2) return message.channel.send(`You already have rep bonus .`)
                                if(pre === 1) {
            itemPrice = 1200
          }      
            db.fetch(`rx2_${message.author.id}`).then(rep => {
              
            if(rep === 1) {
              return message.channel.send('You already have a rep bonus system!')
            }
        let owner= JSON.parse(fs.readFileSync("./rod.json", "utf8"))

              let userO = message.author
                                                                                              const db = require("quick.db")
             db.fetch(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                  if (c <= itemPrice-1) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }
          
                      db.subtract(`globalCredits_${message.author.id}`, parseInt(`${itemPrice}`)).then((c) => {
          
                      })
                
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
            
            
                                  db.set(`${token}_${message.author.id}`, `REP Bonus Purchased for ${itemPrice}`)


              fs.writeFile("./rod.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought rep bonus 2x :tada: for __${itemPrice}__ **Coins** \n Bonus 2x\nTransactionID: **${token}** `)
                console.log(`(Fish Biait)${message.author.username} Bought ${amount2} for ${amount2}`)

              })
                                          

                                                          })
            })
            })
          }
       if (itemName === 'car') {
         
 
          if(pre === 1) {
            itemPrice = 4999
          }
                                     let owner= JSON.parse(fs.readFileSync("./rod.json", "utf8"))

              let userO = message.author
                                                                                              const db = require("quick.db")
             db.fetch(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                  if (c <= itemPrice * amount2 -1) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }
          
                      db.subtract(`globalCredits_${message.author.id}`, parseInt(`${itemPrice * amount2}`)).then((c) => {
          
                      })
                
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
            
            
   db.add(`car_${message.author.id}`, amount2 )
                                  db.set(`${token}_${message.author.id}`, `${amount2} Cars Purchased for ${amount2 * itemPrice}`)


              fs.writeFile("./rod.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought ${amount2} :race_car:  Car(s) :tada: for __${itemPrice * amount2}__ **Coins** \n FAST AS F*K BOII! \nTransactionID: **${token}**`)
                console.log(`(Fish Biait)${message.author.username} Bought ${amount2} for ${itemPrice * amount2}`)

              })
                                          

                                                          })
            }
        if (itemName === 'rodpackage') {
          

           if(pre === 1) {
            itemPrice = 199
          }
                                     let owner= JSON.parse(fs.readFileSync("./rod.json", "utf8"))

              let userO = message.author
                                                                                              const db = require("quick.db")
             db.fetch(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                  if (c <= itemPrice * amount2 - 1) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }
          
                      db.subtract(`globalCredits_${message.author.id}`, parseInt(`${itemPrice * amount2}`)).then((c) => {
          
                      })
                
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
            
            
              owner[userO.id].owner = owner[userO.id].owner + amount2;
   db.add(`bait_${message.author.id}`, 35)
                                  db.set(`${token}_${message.author.id}`, `${amount2} Rodpackage Purchased for ${amount2 * itemPrice}`)


              fs.writeFile("./rod.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought ${amount2} fishing rod and 35 bait :tada: for __${itemPrice * amount2}__ **Coins**! \nTransactionID: **${token}**`)
                console.log(`(Fish Biait)${message.author.username} Bought ${amount2} for ${itemPrice * amount2}`)

              })
                                          

                                                          })
            }
                           if (itemName === 'premium') {
    db.fetch(`gems_${message.author.id}`).then(gems=> {
      
     if (gems <= itemPrice - 1) {
                          return message.channel.send(`**You don't have enough gems for this item.**`);
                      }
          
                      db.subtract(`gems_${message.author.id}`, parseInt(`${itemPrice}`))

   const shortcode = (n) => {
    const possible = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz0123456789'
    let text = ''
    for (var i = 0; i < n + 1; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text;
      }
          const token = shortcode(16)


var days = Math.floor(43200 * 60000/ 86400000000000)
		var hours = Math.floor((43200 * 60000 % 86400000000000) / 3600000)
		var minutes = Math.floor(((43200 * 60000 % 86400000000000) % 3600000) / 60000)
		var seconds = Math.floor((((43200 * 60000 % 86400000000000) % 360000) % 60000) / 1000)
        db.set(`${token}_${client.user.id}` , '43200')
     db.set(`${client.user.id}_${token}` , message.author.tag)
client.users.get(message.author.id).send(`https://mastermindbot.gq/gift/code=${token}`)
      message.channel.send(`<a:tick:612299077551521825> **|** You have successfully bought a premium code for 1,000 Gem(s)!`)
} )
                           }
                                     
   if (itemName === 'rod') {
     
 
      if(pre === 1) {
            itemPrice = 19
          }
                                     let owner= JSON.parse(fs.readFileSync("./rod.json", "utf8"))

              let userO = message.author
                                                                                              const db = require("quick.db")
             db.fetch(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                  if (c <= itemPrice * amount2 -1) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }
          
                      db.subtract(`globalCredits_${message.author.id}`, parseInt(`${itemPrice * amount2}`)).then((c) => {
          
                      })
                
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
            
            
              owner[userO.id].owner = owner[userO.id].owner + amount2;
                                  db.set(`${token}_${message.author.id}`, `${amount2} Rods Purchased for ${amount2 * itemPrice}`)

                 

              fs.writeFile("./rod.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought ${amount2} fishing rod :tada: for __${itemPrice * amount2}__ **Coins**! \nTransactionID: **${token}**`)
                console.log(`(Fish Biait)${message.author.username} Bought ${amount2} for ${itemPrice * amount2}`)

              })
                                          

                                                          })
            }
                         
        
            
  

  
           if(itemName === `upgrade`) {
             
 
             
                if(pre === 1) {
            itemPrice = 27
          }
           
             
             const db = require("quick.db")
                                                     db.fetch(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.

                       
                            let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"))
                 
                         let userUp = message.author
              if(!upgrade[userUp.id]) upgrade[userUp.id] = {
                upgrade: 0
              };

                if (c <= itemPrice -1) {
                          return message.channel.send(`**You don't have enough coins for an upgrade pass**`);
                      }
               if(upgrade[message.author.id].upgrade  == 100){
                message.channel.send('Max level reached , You cannot buy upgrades!')
                   .then(message => {
                message.delete(30000);
            })
        return;
    };                               
  let cooldown = 20000
const ms = require('parse-ms')
    db.fetch(`lastUpgrade_${message.author.id}`).then(i => {

        if (i !== null && cooldown - (Date.now() - i) > 0) {
          let timeObj = ms(cooldown - (Date.now() - i));
          
          return message.channel.send(`Buy command available in ${timeObj.hours}**H** **|** ${timeObj.minutes} **M** **|** ${timeObj.seconds}** S**`)   .then(message => {
                message.delete(8000);
            })
                

        }else{
                        db.set(`lastUpgrade_${message.author.id}`, Date.now()).then(() => {

          
                                                  
                                      
                           const ms = require('ms') //npm i ms
let mute = "10s"
setTimeout(function(){
              
                  message.channel.send("Installment Done .")
                                      
               }, ms(mute))
                                        })
                                                         upgrade[message.author.id].upgrade++;
                                                           db.set(`r1p_${message.author.id}`, `${itemPrice}`)
          db.set(`r1_${message.author.id}`, `Upgrade`)
               db.set(`sid_${message.author.id}`, `${message.guild.id}`)
                 db.set(`${token}_${message.author.id}`, `WorkUpgrade Purchased for ${itemPrice}`)


                                        db.subtract(`globalCredits_${message.author.id}`, parseInt(`${itemPrice}`)).then((pp) => {
            message.channel.send(`Upgrade Successfully bought for __${itemPrice} Coins__\n Installing your upgrade.. wait 10 seconds\nTransactionID: **${token}**`)
              fs.writeFile("./upgrade.json", JSON.stringify(upgrade), (error) => {
                if (error) console.log(error)

              
            
                              
                        })
                                        })
        }
    })
                                        
        
   
        
                                                                                                                         

                                                     })
           }

   })
            })
          })
        }                             
                                                                      
            module.exports = buy;
          