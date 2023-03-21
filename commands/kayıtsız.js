const db = require("croxydb")
const Discord = require("discord.js")
const ids = require("../ids.js");
exports.run = (client, message, args) => {
let kullanıcı = message.mentions.members.first()
let isim = args[1]
let yas = args[2]

let kız = ids.rolKız
let erkek = ids.rolErkek
let kayıtsız = ids.rolKayıtsız
let yetkili = ids.rolYetkili
let tag = ids.tag  //Tag Varsa 38 ve 49'a Bak.

const yetki = new Discord.EmbedBuilder()
.setDescription(`<a:red:1072937597183213669> ${message.author} Bu Komut Kullanmak İçin <@&${ids.rolYetkili}> Rolüne Sahip Olman Gerek! <a:wertica_kristal:1071348757205090325>`)
.setColor("BLACK")

if(!message.member.roles.cache.has(yetkili)) return message.reply({embeds: [yetki]})

const userr = new Discord.EmbedBuilder()
.setDescription(`<a:red:1072937597183213669> ${message.author} .kayıtsız <Etiket> İsim Yaş Yazarak Kayıt Eder Misin ? <a:wertica_kristal:1071348757205090325>`)
.setColor("BLACK")

const etiketlen = new Discord.EmbedBuilder()
.setDescription(`<a:red:1072937597183213669> ${message.author} .kayıtsız <Etiket> İsim Yaş Yazarak Kayıt Eder Misin ? <a:wertica_kristal:1071348757205090325>`)
.setColor("BLACK")

message.guild.members.cache.get(kullanıcı.id).roles.remove(ids.rolErkek2)
message.guild.members.cache.get(kullanıcı.id).roles.remove(ids.rolKız2)
message.guild.members.cache.get(kullanıcı.id).roles.remove(erkek)
message.guild.members.cache.get(kullanıcı.id).roles.remove(kız)
message.guild.members.cache.get(kullanıcı.id).roles.add(kayıtsız)
kullanıcı.setNickname(`${isim} | ${yas}`)
db.add(`kayıtsız_${message.author.id}`, 1)
db.add(`toplam_${message.author.id}`, 1)

if (!etiketlenenKişi) return message.reply({embeds: [etiketlen]})
etiketlenenKişi.roles.set([ids.kayıtsız])
etiketlenenKişi.setNickname(`${ids.tag} İsim ${ids.sembol} Yaş`)

const embed = new Discord.EmbedBuilder()
.setTitle("<a:star:1072937596088500254>  Başarı İle Kayıt Edildi!")
.setDescription(`

\`❯\` __Kullanıcının ismi :__ \`${ids.RolKayıtsız}\` **Olarak Güncellendi!**

\`❯\` __Kullanıcının Rolleri :__ <@&${kayıtsız}> **Adlı Roller Alındı.**

\`❯\` __Alınan Roller :__ <@&${erkek}>, <@&${ids.rolErkek2}> Veya <@&${kız}>, <@&${ids.rolKız2}> **Olarak Güncellendi!**

`)
.setFooter({ text: `Kayıt Eden: ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
.setColor("BLACK")
return message.channel.send({embeds: [embed]})

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    perm: 0
  }
  exports.help = {
    name: 'kayıtsız'
  }