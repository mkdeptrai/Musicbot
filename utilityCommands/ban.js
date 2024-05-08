const { EmbedBuilder } = require('discord.js');
const {
    MessageEmbed,
    Permissions
  } = require(`discord.js`)
  
module.exports = {
    name: 'ban',
    description: 'Ban a user from the server',
    execute(message, args) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.reply('Bạn không có quyền để sử dụng lệnh này !!!');
        }
        const user = message.mentions.users.first();
        if (!user) {
            return message.reply('Bạn cần chỉ định người dùng để cấm.');
        }
        const member = message.guild.members.cache.get(user.id);
        member.ban();
        const embed = new EmbedBuilder()
            .setColor('#FF0000')
            .setTitle('Người dùng bị ban ✅')
            .setDescription(`▶️ ${user.tag} đã bị cút khỏi server bởi ${message.author.tag}.`)
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


