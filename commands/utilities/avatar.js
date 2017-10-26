const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            group: 'utilities',
            memberName: 'avatar',
            description: 'Look at your friend\'s avatar',
            examples: ['avatar <MEMBER>'],
            guildOnly: true,

            // userPermissions: ['MANAGE_MESSAGES'],

            // throttling: {
            //     usages: 0,
            //     duration: 0
            // },

            args: [
            {
                key: `victim`,
                prompt: 'Who\'s avatar are you viewing?',
                type: 'user'

            }
            ]
        });
    }

    run(msg, {victim}) {

    var avatarPic = msg.mentions.members.first().user.displayAvatarURL
        const embed = new Discord.RichEmbed()
            .setAuthor(`${victim.tag}'s avatar`)
            .setImage(avatarPic)
        
            .setColor(0x0de538)
           
            .setFooter("� The Chill Zone", this.client.user.displayAvatarURL) //AVATAR AFTER VENOM
        
           .setTimestamp();
      
        return msg.channel.send({embed});

    }
};