const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId,guildId,token } =require('./config.json');

const commands = [{
  name: 'ping',
  description: 'Replies with Pong!'
}]; 

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('!!!Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(clientId,guildId),
      { body: commands },
    );

    console.log('!!!Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();