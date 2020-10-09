exports.run = async(client , msg) => {
     const moment = require('moment');
    require('moment-duration-format');
    const db = require("quick.db")
db.delete(`userCooldown_`)
  var figlet = require('figlet');
 
  figlet(`Auto Help Bot`, function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }


  console.log(figlet.textSync("MasterMind Loaded!"));
  })
};
