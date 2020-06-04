
////Pink Code Share <3
const Genius = new (require("genius-lyrics"))("ApavK7sxIw4WfaTNVe1g9Hc8civ8WqGW0NWx_akrti6Bcg3Nc7ILibv9LoVDoT0-");
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "sözler", 
  description: "Song şarkı sözleri alın",
  async execute (client, message, args) {
    ////Pink Code Share <3
     const { channel } = message.member.voice;
    if (!channel) {
////Pink Code Share <3
      return message.channel.send("SES KANALINDA OLMALISINIZ :/");
    }
////Pink Code Share <3
    const serverQueue = message.client.queue.get(message.guild.id);
////Pink Code Share <3
    if (!serverQueue) {
      return message.channel.send("Bot'un oynadığı hiçbir şey yok");
    }
    ////Pink Code Share <3
  let m = await message.channel.send("Şarkı Sözü Bulma")  
    
    
    ////Pink Code Share <3
  Genius.tracks.search(serverQueue.songs[0].title)
.then(results => {
    const song = results[0];
    song.lyrics()
    .then(lyrics => {
      if (lyrics.length > 4095) {
        return message.channel.send("SÖZLER ÇOK UZUN")
      }
   ////Pink Code Share <3   
      if (lyrics.length < 2048) {
        const lyricsEmbed = new MessageEmbed()
          .setColor("#ff2050")
          .setDescription(lyrics.trim());
        return m.edit('', lyricsEmbed);
      }
  m.delete()
////Pink Code Share <3      
    })
}).catch(err => message.channel.send("Şarkı sözleri bulunamadı"));
    
    
  }
}

////Pink Code Share <3