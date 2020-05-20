const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('message', message => {
    if (message.content.startsWith('/ping')) {
        message.channel.send('pong!');
    }


    if (message.content.startsWith("/roleta")) {
        randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
        if (randomNumber == 2) {
            message.reply("Morreu!");
        } else {
            message.reply("Sobreviveu!");
        }
    }

    if (message.content.startsWith("/gaydar")) {
        randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
        if (randomNumber == 2) {
            message.reply("Você não é gay!");
        } else {
            message.reply("Você é gay!");
        }
    }

    if (message.content.startsWith('/help')) {
        message.channel.send('Comandos registrados do sistema: \n/ping \n/roleta \n/gaydar');
    }
    
});
bot.login(config.token);