const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('game')
        .setDescription('Tells everyone in the server you are playing a game to and get on now!')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('The name of the game')
                .setRequired(true)),
    async execute(interaction) {
        const name = interaction.options.getString('name') ?? 'No name provided';
        await interaction.reply(`@everyone ${interaction.user.username} is playing ${name} and wants you to get on!`);
    },
};