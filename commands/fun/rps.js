const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

function ball() {
    
};

module.exports = class RPSCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'rps',
            alias: ['rockpaperscissors'],
            group: 'fun',
            memberName: 'rps',
            description: 'Play rock paper scissors with VenomBot.',
            examples: ['rps r/p/s'],
            guildOnly: true,

            // userPermissions: ['MANAGE_MESSAGES'],

            // throttling: {
            //     usages: 0,
            //     duration: 0
            // },

            args: [
            {
                key: `element`,
                prompt: 'Rock, paper or scissors?',
                type: 'string'
            }
            ]
        });
    }

    run(msg, {element}) {
        var rand = ['Rock', 'Paper', 'Scissors'];
        var baller = rand[Math.floor(Math.random()*rand.length)];
        var ball = baller.toLowerCase()
        var choice = element.toLowerCase();

        if (choice == "paper" || choice == "rock" || choice == "scissors") {
            var sending = 'nil';

            if (choice == ball) {
                sending = 'we draw!';
            } else if (choice == 'rock' && baller == 'paper') {
                sending = 'you lose!'
            } else if (choice == 'rock' && baller == 'scissors') {
                sending = 'you win!'
            } else {
                sending = 'you win!'
            }


            const embed = new Discord.RichEmbed()
                .setAuthor("Rock Paper Scissors")
                .setDescription(`You chose ${choice}, I chose ${ball}. So ${sending}`)
            
                .setColor(0x00AE86)
            // .setDescription("This is the main body of text, it can hold 2048 characters.")
                .setFooter("� The Chill Zone", this.client.user.displayAvatarURL) //AVATAR AFTER VENOM
            
            .setTimestamp();
        
            return msg.channel.send({embed});
        } else {
            return msg.reply("Oh no. You never said rock, paper or scissors!") 
        }
    }
};

