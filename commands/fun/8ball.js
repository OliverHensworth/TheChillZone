const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

function ball() {
    
};

module.exports = class Ball8Command extends Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            alias: ['fortune'],
            group: 'fun',
            memberName: '8ball',
            description: 'Ask a question for the 8ball to answer.',
            examples: ['8ball <QUESTION>'],
            guildOnly: true,

            // userPermissions: ['MANAGE_MESSAGES'],

            // throttling: {
            //     usages: 0,
            //     duration: 0
            // },

            args: [
            {
                key: `question`,
                prompt: 'What is your question?',
                type: 'string'
            }
            ]
        });
    }

    run(msg, {victim}) {
        var rand = ['Yes.', 'No.', 'Ask later.', 'What do you think?', 'Maybe.', 'Obviously.', 'Don\'t be silly!'];
        
        var ball = rand[Math.floor(Math.random()*rand.length)];

        const embed = new Discord.RichEmbed()
            .setAuthor("8 Ball ")
            .setDescription(`The 8ball says:\n**${ball}**`)
        
            .setColor(0x00AE86)
           // .setDescription("This is the main body of text, it can hold 2048 characters.")
            .setFooter("� The Chill Zone", this.client.user.displayAvatarUrl) //AVATAR AFTER VENOM
        
           .setTimestamp();
      
        return msg.channel.send({embed});

    }
};

