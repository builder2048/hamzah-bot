const Discord = require('discord.js');
const client = new Discord.Client();

client.on('@hamzah-bot', () => {
    console.log('hello.');
});

client.on('message', message => {
    if (message.content === 'whats 1 + 1') {
    	message.channel.send('2');
  	}
});

client.on('message', message => {
    if (message.content === 'reverse oof') {
    	message.reply('foo');
  	}
});

client.on('message', message => {
    if (message.content === '?help') {
    	message.reply('list of commands: reverse oof, whats 1 + 1 and @hamzah-bot');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);