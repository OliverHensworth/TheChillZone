const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            aliases: ['speak', 'chat'],
            group: 'misc',
            memberName: 'say',
            description: 'The bot says what you say!',
            examples: ['say <MESSAGE>'],
            guildOnly: false,

            // userPermissions: ['MANAGE_MESSAGES'],

            // throttling: {
            //     usages: 0,
            //     duration: 0
            // },

            args: [
            {
                key: `message`,
                prompt: 'What is your message?',
                type: 'string'

            }
            ]
        });
    }

    run(msg, {message}) {
    

        const embed = new Discord.RichEmbed()
            .setAuthor(`Message`)
            .setDescription(`${message}`)
        
            .setColor(0x0de538)
           
            .setFooter("� VenomBot", this.client.user.displayAvatarURL) //AVATAR AFTER VENOM
        
           .setTimestamp();
      
        msg.delete()
        return msg.channel.send({embed});

    }
};