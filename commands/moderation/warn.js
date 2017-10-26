const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class WarnCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'warn',
            // alias: ['permremove'],
            group: 'moderation',
            memberName: 'warn',
            description: 'Warn people in the guild.',
            examples: ['warn <MEMBER> <REASON>'],
            guildOnly: true,

            userPermissions: ['KICK_MEMBER'],

            // throttling: {
            //     usages: 0,
            //     duration: 0
            // },

            args: [
            {
                key: `victim`,
                prompt: 'Who are you gonna warn?',
                type: 'member'
            },
            {
                key: `reason`,
                prompt: 'Why are you warning them?',
                type: 'string'
            }
            ]
        });
    }

    run(msg, {victim, reason}) {

        const embed = new Discord.RichEmbed()
            .setAuthor("Warned!")
            .setDescription(`${msg.author} has warned ${victim}!`)
            .addField("Reason:", reason)
            .setColor(0xff9900)
           // .setDescription("This is the main body of text, it can hold 2048 characters.")
            .setFooter("� The Chill Zone", this.client.user.displayAvatarURL) //AVATAR AFTER VENOM
        
           .setTimestamp();
        
        const embed2 = new Discord.RichEmbed()
           .setAuthor("Warned!")
           .setDescription(`You have been warned in ${msg.guild.name} for ${reason}!`)
           .setColor(0xff9900)
           .setFooter("� The Chill Zone", this.client.user.displayAvatarURL)
       
          .setTimestamp();

        msg.channel.send({embed}).then(sent => {            
            victim.send({embed: embed2})
        });

        
        return;

    }
};