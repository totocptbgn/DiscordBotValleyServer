const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

client.on('ready', () => {
  console.log("Bot deployed.");
});

var prefix = ".";

client.on('message', message => {

  // Faire répondre le bot à ".hi"
  if (message.content === prefix + 'hi') {
    message.channel.send("Salut, " + message.author.toString() + ". :smile:");
    console.log(`Replied hi to ${message.author.username} in ${message.guild.name}`);
  }

  // Faire dire au bot ce que vous voulez en rentrant ".say [le message]"
  if (message.content.substr(0, 5) === prefix + "say ") {
    var messageContent = message.content.substr(5, message.content.length);
    message.delete().catch(O_o => {});
    message.channel.send(messageContent);
    console.log(`Said the message : \"` + messageContent + `\" in ${message.guild.name}`);
  }
  
});

client.on('guildMemberAdd', member => {

  /* Ce que doit faire le robot quand un nouveau membre rejoint le serveur (À faire...) :
   *
   * - Lui donner le rôle de "nouveau"
   * - Quand il choisit son role en cliquant sur l'émoji, lui attribuer une maison
   * - D'autres choses que je n'ai pas imaginer...
   */

});

client.login(process.env.token);
