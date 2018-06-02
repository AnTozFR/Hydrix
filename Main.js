const Discord = require('discord.js')
const client = new Discord.Client()
client.login("NDQ5NjI2MzU5NTY0NTk5Mjk2.Den5-w.AV5glxfmZ4Fv_ajGmCWr_-_TNo8")
var prefix = "h/";

client.on('ready', () => {
console.log("Je suis connecté")
client.user.setActivity("Hydrix Simulation")
})


client.on("guildMemberAdd", member => {
const bvn = member.guild.channels.find(m => m.name === "général")
if (!bvn) return;
bvn.send(`Bienvenue ${member}, n'oublie pas de lire le règlement ! :wink:`)
})

client.on("guildMemberRemove", member => {
const bye = member.guild.channels.find(m => m.name === "général")
if (!bye) return;
bye.send(`${member} a décidé de nous quitter. RIP`)
})


client.on('guildMemberAdd', member => {
var role = member.guild.roles.find('name','Membres');
member.addRole(Nouveaux |Membre)
})


client.on('message', message => {
if(message.content.startsWith(prefix + "coucou")){
message.reply("ferme ta gueule pd !")
}
})