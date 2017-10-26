const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");

let userdata = JSON.parse(fs.readFileSync(path.join(__dirname, '../../storage/userdata.json'), null, 4, "utf-8"));

module.exports = class CoinsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'coins',
            //aliases: ['speak', 'chat'],
            group: 'economy',
            memberName: 'coins',
            description: 'How many coins you have',
            examples: ['coins'],
            guildOnly: true,

            // userPermissions: ['MANAGE_MESSAGES'],

             

        });
    }

    run(msg) {
    

        const embed = new Discord.RichEmbed()
            .setAuthor(`Coins:`)
            .setDescription(`You have ${JSON.parse(fs.readFileSync(path.join(__dirname, '../../storage/userdata.json'), null, 4, "utf-8"))[msg.author.id].coins} coins.`)
        
            .setColor(0x0de538)
           
            .setFooter("� The Chill Zone", this.client.user.displayAvatarURL) //AVATAR AFTER VENOM
        
           .setTimestamp();
      
        return msg.channel.send({embed});

    }
};