const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('diablo')
        .setDescription('Tells everyone in the server you are playing Diablo to and get on now!'),
    async execute(interaction) {
        await interaction.reply(`@everyone ${interaction.user.username}, is playing Diablo and wants you to get on!`);
    },
};