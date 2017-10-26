const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");

let userdata = JSON.parse(fs.readFileSync(path.join(__dirname, '../../storage/userdata.json'), null, 4, "utf-8"));

module.exports = class RobCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'rob',
            //aliases: ['speak', 'chat'],
            group: 'economy',
            memberName: 'rob',
            description: 'You rob a bank. Chances are you\'ll not success, but is it worth it?',
            examples: ['rob'],
            guildOnly: true,

            // userPermissions: ['MANAGE_MESSAGES'],

            throttling: {
                usages: 3,
                duration: 1800
            },

        });
    }

    run(msg) {
        if (!userdata[msg.author.id].coins >= 75) return msg.reply("You cannot afford the equipment to rob a bank. Try sending more messages to earn money!");
        let randint = Math.floor(Math.random()*4);
        var toSend = "";
        if (!randint == 1) {
            userdata[msg.author.id].coins = userdata[msg.author.id].coins + 75;
            toSend = `Congratulations! You successfully robbed Hensworth & Co banks. You now have ${userdata[msg.author.id].coins}`;

        } else {
            

            userdata[msg.author.id].coins = userdata[msg.author.id].coins - 75;
            toSend = `Darn! You messed up the robbery, you lost 75 coins! You now have ${userdata[msg.author.id].coins}`;
        }
        const embed = new Discord.RichEmbed()
            .setAuthor(`Robbed:`)
            .setDescription(toSend)
        
            .setColor(0x0de538)
           
            .setFooter("� The Chill Zone", this.client.user.displayAvatarURL) //AVATAR AFTER VENOM
        
           .setTimestamp();
      
        return msg.channel.send({embed});

    }
};