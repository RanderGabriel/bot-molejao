import Discord from "discord.js";

const client = new Discord.Client();

const O_DIA = 5;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.content === 'Que dia é hoje?') {
        const diaDaSemana = new Date().getDay();
        if(diaDaSemana == O_DIA) msg.reply('HOJE É DIA DE MOLEJO!!');
        else msg.reply('Um dia entendiante qualquer');
    }
  });
  
  client.login(process.env.DISCORD_TOKEN);