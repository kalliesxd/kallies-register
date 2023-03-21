const db = require("croxydb")
const Discord = require("discord.js")
const ids = require("../ids.js");
exports.run = (client, message, args) => {
let kullanıcı = message.mentions.members.first()
let isim = args[1]
let yas = args[2]

let kız = ids.rolKız
let kayıtsız = ids.rolKayıtsız
let yetkili = ids.rolYetkili
let tag = ids.tag  //Tag Varsa 38 ve 49'a Bak.

const yetki = new Discord.EmbedBuilder()
.setDescription(`<a:red:1072937597183213669> ${message.author} Bu Komut Kullanmak İçin <@&${ids.rolYetkili}> Rolüne Sahip Olman Gerek! <a:wertica_kristal:1071348757205090325>`)
.setColor("BLACK")

if(!message.member.roles.cache.has(yetkili)) return message.reply({embeds: [yetki]})

const userr = new Discord.EmbedBuilder()
.setDescription(`<a:red:1072937597183213669> ${message.author} .k <Etiket> İsim Yaş Yazarak Kayıt Eder Misin ? <a:wertica_kristal:1071348757205090325>`)
.setColor("BLACK")

const name = new Discord.EmbedBuilder()
.setDescription(`<a:red:1072937597183213669> ${message.author} .k <Etiket> İsim Yaş Yazarak Kayıt Eder Misin ? <a:wertica_kristal:1071348757205090325>`)
.setColor("BLACK")

const age = new Discord.EmbedBuilder()
.setDescription(`<a:red:1072937597183213669> ${message.author} .k <Etiket> İsim Yaş Yazarak Kayıt Eder Misin ? <a:wertica_kristal:1071348757205090325>`)
.setColor("BLACK")

if (!kullanıcı) return message.reply({embeds: [userr]})
if (!isim) return message.reply({embeds: [name]})
if (!yas) return message.reply({embeds: [age]})

message.guild.members.cache.get(kullanıcı.id).roles.add(kız)
message.guild.members.cache.get(kullanıcı.id).roles.add(ids.rolKız2)
message.guild.members.cache.get(kullanıcı.id).roles.remove(kayıtsız)
kullanıcı.setNickname(`${isim} | ${yas}`)
db.add(`kız_${message.author.id}`, 1)
db.add(`toplam_${message.author.id}`, 1)


const embed = new Discord.EmbedBuilder()
.setTitle("<a:star:1072937596088500254>  Başarı İle Kayıt Edildi!")
.setDescription(`

\`❯\` __Kullanıcının ismi :__ \`${ids.tag} ${isim} | ${yas}\` **Olarak Güncellendi!**

\`❯\` __Kullanıcının Rolleri :__ <@&${kız}>, <@&${ids.rolKız2}> **Olarak Güncellendi!**

\`❯\` __Alınan Roller :__ <@&${kayıtsız}> **Adlı Roller Alındı.**

`)
.setFooter({  text: `${client.user.username}`, iconURL: client.user.avatarURL({}) })
.setColor("BLACK")
return message.channel.send({embeds: [embed]})

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k","woman"],
  permLevel: 0
}

exports.help = {
  name: 'kız'
};