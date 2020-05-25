const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json")
////Pink Code Share <3

client.on("ready", () => {
  console.log('Bot Başarılı Bir Şekilde Çalıştı');
  var oyun = [
        "🏅Pink Code #YÜKSELİŞ"
        
  ];
////Pink Code Share <3
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.twitch.com/pinkcode" );
        }, 2 * 2500);
})
////Pink Code Share <3
client.on("warn", info => console.log(info));

client.on("error", console.error)
////Pink Code Share <3
//DEFINIING
client.commands = new discord.Collection()
client.prefix = PREFIX
client.queue = new Map();


//LETS LOAD ALL FILES
const cmdFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "komutlar", file))
  client.commands.set(command.name, command)
} //LOADING DONE


//WHEN SOMEONE MESSAGE
client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  ////Pink Code Share <3
  if(message.content.startsWith(PREFIX)) { 
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/) //removing prefix from args
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
    ////Pink Code Share <3
  try  { 
      client.commands.get(command).execute(client, message, args)
    } catch (err) { 
      console.log(err)
      message.reply("Bu komutu kullanırken hata alıyorum")
    }
    
  }
  ////Pink Code Share <3
  
});




//DONT DO ANYTHING WITH THIS TOKEN lol
client.login(TOKEN)
////Pink Code Share <3