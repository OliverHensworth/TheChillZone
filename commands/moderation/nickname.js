const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class NicknameCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nickname',
            alias: ['nick', 'setnick', 'nn'],
            group: 'moderation',
            memberName: 'nickname',
            description: 'Nickname people in the guild.',
            examples: ['nickname @OliverHensworth#5849 The best Bot Creattor'],
            guildOnly: true,

            userPermissions: ['MANAGE_NICKNAMES'],

            // throttling: {
            //     usages: 0,
            //     duration: 0
            // },

            args: [
            {
                key: `victim`,
                prompt: 'Who are you gonna nickname?',
                type: 'member'
            },
            {
                key: `nickname`,
                prompt: 'What\'s the nickname?',
                type: 'string' 
            }
            ]
        });
    }

    run(msg, {victim, nickname}) {

        const embed = new Discord.RichEmbed()
            .setAuthor("Changed nickname!")
            .setDescription(`${msg.author} has changed the nickname of ${victim} to ${nickname}`)
        
            .setColor(0xff9900)
           // .setDescription("This is the main body of text, it can hold 2048 characters.")
            .setFooter("� The Chill Zone", this.client.user.displayAvatarURL) //AVATAR AFTER VENOM
        
           .setTimestamp();
      
 
        victim.setNickname(nickname).then(nick => {
            msg.channel.send({embed});
        })
        return;

    }
};