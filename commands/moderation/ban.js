const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class BanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            alias: ['permremove'],
            group: 'moderation',
            memberName: 'ban',
            description: 'ban people from the guild.',
            examples: ['ban <EMBER>'],
            guildOnly: true,

            userPermissions: ['BAN_MEMBER'],

            // throttling: {
            //     usages: 0,
            //     duration: 0
            // },

            args: [
            {
                key: `victim`,
                prompt: 'Who are you gonna ban?',
                type: 'member'
            },
            {
                key: `reason`,
                prompt: `Why are you banning them?`,
                type: 'string'
            }
            ]
        });
    }

    run(msg, {victim, reason}) {
        const embed = new Discord.RichEmbed()
            .setAuthor("Banned!")
            .setDescription(`${msg.author} has banned ${victim}!`)
            .addField("Reason:", reason)
        
            .setColor(0xff0000)
           // .setDescription("This is the main body of text, it can hold 2048 characters.")
            .setFooter("� TheChillZone", this.client.user.displayAvatarURL) //AVATAR AFTER VENOM
        
           .setTimestamp();
      
        msg.channel.send({embed}).then(sent => {
            victim.ban(reason)
        });

        
        return;

    }
};