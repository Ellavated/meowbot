require('dotenv').config();
const { Client } = require("discord.js");
const client = new Client({
  intents: ['GuildMessages', "MessageContent", "DirectMessages", 'Guilds']
});
const token = process.env.TOKEN;

client.on('ready', () => {
  console.log(`${client.user.username} (${client.user.id}) | Now Online!`);
});

client.on('messageCreate', async (message) => {
  try {
    if (!message.inGuild) {
      return message.reply("Meow!");
    };
    if (message.author.bot) return;

    if (!message.content.toLowerCase().includes("meow")) {
      if (message.deletable) {
        return message.delete();
      }
    }
  } catch (error) {
    console.log(`There was an error.\n${error}`);
  }
});

client.login(token);