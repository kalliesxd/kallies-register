const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async(client, message) => {
  let kullanıcı = message.mentions.members.first()


  if(!kullanıcı) {
    let erkekPuan = db.fetch(`erkek_${message.author.id}`);
    let kızPuan = db.fetch(`kız_${message.author.id}`);
    let toplamPuan = db.fetch(`toplam_${message.author.id}`);
    if(toplamPuan === null) toplamPuan = "0"  
     if(erkekPuan === null) erkekPuan = "0" 
     if(toplamPuan === undefined) toplamPuan = "0"  
     if(erkekPuan === undefined) erkekPuan = "0" 
     if(kızPuan === null) kızPuan = "0"
     if(kızPuan === undefined) kızPuan = "0"

     const kayıtlar1 = new Discord.EmbedBuilder()
     .setTitle("Register Stat's")
     .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
     .setDescription(`\`➤\` Toplam Kayıtların: **${toplamPuan}** Kadar Bulunmakta!

     \`➤\` Toplam Erkek Kayıtların: **${erkekPuan}** Kadar Bulunmakta!

     \`➤\` Toplam Kız Kayıtların: **${kızPuan}\** Kadar Bulunmakta!
     
     `)
     .setFooter({ text: `Sorgulayan: ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
     .setColor("BLACK")
     message.reply({embeds: [kayıtlar1]})
  };
  

  if(kullanıcı) {
    let erkekPuan1 = db.fetch(`erkek_${kullanıcı.id}`);
    let kızPuan1 = db.fetch(`kız_${kullanıcı.id}`);
    let toplamPuan1 = db.fetch(`toplam_${kullanıcı.id}`);
    if(toplamPuan1 === null) toplamPuan1 = "0"  
     if(erkekPuan1 === null) erkekPuan1 = "0" 
     if(toplamPuan1 === undefined) toplamPuan1 = "0"  
     if(erkekPuan1 === undefined) erkekPuan1 = "0" 
     if(kızPuan1 === null) kızPuan1 = "0"
     if(kızPuan1 === undefined) kızPuan1 = "0"

     const kayıtlar1 = new Discord.EmbedBuilder()
     .setTitle("Register Stat's")
     .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
     .setDescription(`\`➤\` Toplam Kayıtların: **${toplamPuan}** Kadar Bulunmakta!

     \`➤\` Toplam Erkek Kayıtların: **${erkekPuan}** Kadar Bulunmakta!

     \`➤\` Toplam Kız Kayıtların: **${kızPuan}\** Kadar Bulunmakta!
     `)
     .setFooter({ text: `Sorgulayan: ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
     .setColor("BLACK")
     message.reply({embeds: [kayıtlar1]})
  }}
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  perm: 0
}
exports.help = {
  name: 'rstat'
}