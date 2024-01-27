const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription(':ping_pong:'),
    async execute(interaction) {
        await interaction.reply('Pong!')
}}