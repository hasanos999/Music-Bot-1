const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== "389770386528534528")
    return message.channel.send(
      "Geliştiricim Değilsin Bu Komutu kullanamazsın.!"
    );

  message.channel.sendMessage(
    `Müzik Projesi Başarılı Bir Şekilde Yeniden Başlatıldı.....`
  );
  message.delete(60).then(msg => {
    console.log(`✅ | Bot Yeniden Başlatıldı...`);

    process.exit(0);
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r", "reboot", "yenile", "yeniden başlat"],
  permLevel: 0
};

module.exports.help = {
  name: "reboot",
  description: "",
  usage: "reboot"
};
