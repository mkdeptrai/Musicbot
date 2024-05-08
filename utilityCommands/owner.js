const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const youtubeLink = 'Tran Le Minh Khoi';
        const InstagramLink = 'https://discord.gg/karmacatholic2024';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖 Tôi là Zao Music được phát triển bởi tranleminhkhoi và chủ sở hữu của tôi là member của Karma Catholic\n ❤️ [RTX GAMING](${youtubeLink})\n 💙 [Atstreak](${InstagramLink})`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};

