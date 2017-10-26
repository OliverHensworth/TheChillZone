const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class ShootCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'shoot',
            alias: ['kill', 'bang', 'boom'],
            group: 'fun',
            memberName: 'shoot',
            description: 'Kill your friends.',
            examples: ['shoot @OliverHensworth#5849'],
            guildOnly: true,

            // userPermissions: ['MANAGE_MESSAGES'],

            // throttling: {
            //     usages: 0,
            //     duration: 0
            // },

            args: [
            {
                key: `victim`,
                prompt: 'Who are you gonna shoot?',
                type: 'user'
            }
            ]
        });
    }

    run(msg, {victim}) {

        const embed = new Discord.RichEmbed()
           // .setTitle("This is your title, it can hold 256 characters")
            .setDescription(`:skull: :gun: ${msg.author} has shot ${victim}`)
        
            .setColor(0x00AE86)
           // .setDescription("This is the main body of text, it can hold 2048 characters.")
            .setFooter("� The Chill Zone", this.client.user.displayAvatarURL) //AVATAR AFTER VENOM
        
           .setTimestamp();
      
        return msg.channel.send({embed});

    }
};