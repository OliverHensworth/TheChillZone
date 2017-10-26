const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class KickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            alias: ['remove'],
            group: 'moderation',
            memberName: 'kick',
            description: 'kick people from the guild.',
            examples: ['kick <MEMBER>'],
            guildOnly: true,

            userPermissions: ['KICK_MEMBER'],

            // throttling: {
            //     usages: 0,
            //     duration: 0
            // },

            args: [
            {
                key: `victim`,
                prompt: 'Who are you gonna kicking?',
                type: 'member'
            },
            {
                key: `reason`,
                prompt: `Why are you kicking them?`,
                type: 'string'
            }
            ]
        });
    }

    run(msg, {victim, reason}) {

        const embed = new Discord.RichEmbed()
            .setAuthor("Kicked!")
            .setDescription(`${msg.author} has kicked ${victim}!`)
            .addField("Reason:", reason)
        
            .setColor(0xff0000)
           // .setDescription("This is the main body of text, it can hold 2048 characters.")
            .setFooter("� TheChillZone", this.client.user.displayAvatarURL) //AVATAR AFTER VENOM
        
           .setTimestamp();
      
        msg.channel.send({embed}).then(sent => {
            victim.kick(reason)

        });

        
        return;

    }
};