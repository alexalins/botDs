const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('message', message => {
    if (message.content.startsWith('!ping')) {
        message.channel.send('pong!');
    }


    if (message.content.startsWith("!roleta")) {
        randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
        if (randomNumber == 2) {
            message.reply("Morreu!");
        } else {
            message.reply("Sobreviveu!");
        }
    }
    
});
bot.login(config.token);