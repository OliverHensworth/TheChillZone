const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class DateCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'date',
            group: 'fun',
            memberName: 'date',
            description: `You\'ll see. ;)`,
            examples: ['date [age] [gender] [location]'],
            guildOnly: false,

            // userPermissions: ['MANAGE_MESSAGES'],
            
            // throttling: {
            //     usages: 0,
            //     duration: 0
            // },

            args: [
                {
                    key: 'age',
                    prompt: 'Your age.',
                    type: 'integer'
                },
                {
                
                    key: 'gender',
                    prompt: 'Are you male or female?',
                    type: 'string'
                },
                {
                    key: 'location',
                    prompt: 'Where are you from?',
                    type:'string'
                }
            ]
        });    
    }

    run(msg, {age, gender, location}) {
        msg.delete();

        const embed = new Discord.RichEmbed()
         .setTitle("Date?")
         .setDescription(`Why hello there, ${msg.author}. You are a ${age} year old ${gender} which is perfect, I'll come to ${location} tonight!`)
     
         .setColor(0x00AE86)
        // .setDescription("This is the main body of text, it can hold 2048 characters.")
         .setFooter("� The Chill Zone", this.client.user.displayAvatarURL) //AVATAR AFTER VENOM
     
        .setTimestamp();
   
     return msg.channel.send({embed});

       
    }

};