const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

client.on('ready', () => {
  console.log("Bot deployed.");
});

client.on('message', message => {
  var prefix = ".";

  // Make the bot reply to ".hi"
  if (message.content === prefix + 'hi') {
    message.channel.send("Hi, " + message.author.toString() + ". :smile:");
    console.log(`Replied hi to ${message.author.username} in ${message.guild.name}`);
  }

  // Make the bot say whatever you want by typing .say "yout message"
  if(message.content.substr(0, 8) === prefix + "say") {
    var messageContent = message.content.substr(5, message.content.length);
    message.delete().catch(O_o => {});
    message.channel.send(messageContent);
  }

});

client.login(process.env.token);
