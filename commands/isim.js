const db = require("croxydb")
const Discord = require("discord.js")
const ids = require("../ids.js");
exports.run = (client, message, args) => {
let kullanıcı = message.mentions.members.first()
let isim = args[1]
let yas = args[2]

let yetkili = ids.rolYetkili
let tag = ids.tag  //Tag Varsa 34 ve 41'e Bak.

const yetki = new Discord.EmbedBuilder()
.setDescription(`<a:red:1072937597183213669> ${message.author} Bu Komut Kullanmak İçin <@&${ids.rolYetkili}> Rolüne Sahip Olman Gerek! <a:wertica_kristal:1071348757205090325>`)
.setColor("BLACK")

if(!message.member.roles.cache.has(yetkili)) return message.reply({embeds: [yetki]})

const userr = new Discord.EmbedBuilder()
.setDescription(`<a:red:1072937597183213669> ${message.author} Bir Kullanıcı Etiketler Misin ? <a:wertica_kristal:1071348757205090325>`)
.setColor("BLACK")

const name = new Discord.EmbedBuilder()
.setDescription(`<a:red:1072937597183213669> ${message.author} Bir İsim Misin ? <a:wertica_kristal:1071348757205090325>`)
.setColor("BLACK")

const age = new Discord.EmbedBuilder()
.setDescription(`<a:red:1072937597183213669> ${message.author} Bir Yaş Misin ? <a:wertica_kristal:1071348757205090325>`)
.setColor("BLACK")

if (!kullanıcı) return message.reply({embeds: [userr]})
if (!isim) return message.reply({embeds: [name]})
if (!yas) return message.reply({embeds: [age]})

kullanıcı.setNickname(`${isim} | ${yas}`)

const embed = new Discord.EmbedBuilder()
.setTitle("İsim Değiştirme")
.setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
.setDescription(`<a:music:1030587616774598726> **İsmi Değiştirilen**\n${kullanıcı}
<a:staff:1030578443785605130> **İsmi Değiştiren**\n${message.author}
<a:wow:1030587075113791498> **Yeni İsmin**\n\`${isim} | ${yas}\``)
.setColor("BLACK")
return message.channel.send({embeds: [embed]})

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["name"],
  permLevel: 0
}

exports.help = {
  name: 'isim'
};